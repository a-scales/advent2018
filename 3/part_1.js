var fs = require('fs');
function load() {
    var cont = fs.readFileSync("./input.txt").toString().split('\n');
    let mapped = cont.map( entry => {
        
        return {
            id: entry.match(/((?!\#)\d{1,}(?=\s))/g)[0],
            coords: {
                fromLeft: entry.match(/((?!\@ )\d{0,4}(?=,))/g)[0],
                fromTop: entry.match(/((?!\,)\d{0,4}(?=:))/g)[0]
            },
            size: {
                x: entry.match(/((?!\: )\d{0,4}(?=x))/g)[0],
                y: entry.match(/((?!\x)\d{0,4}(?=$))/g)[0]
            }
        }
    })    
    return mapped;
}

const claims = load();
const rows = 1000;
const cols = 1000;

var array = []
for( let r = 0; r < rows; r++) {    
    array.push([]);
    for(let c = 0; c < cols; c++) {
        array[r].push({claims:[],overloadedArea:0})
    }
}
// console.log(array);
console.log(array.length,array[0].length)
claims.forEach( claim => {
    var col = parseInt(claim.coords.fromLeft);
    var row = parseInt(claim.coords.fromTop);
    var col_end = (col + parseInt(claim.size.x));
    var row_end = (row + parseInt(claim.size.y));
    for(var r = row; r < row_end; r++) {
        for(var c = col; c < col_end; c++) {
            try {
                array[r][c].claims.push(claim.id);
                array[r][c].overloadedArea+= 1;
            } catch(err) {
                console.log(err+" @: row "+r+", col "+c, row,col,row_end,col_end);
            }
        }
    }
})
var overlapping = 0;
array.forEach( row => {
    row.forEach( col => {
        if( col.overloadedArea > 1) {
            overlapping++;
        }
        if( col.claims.length == 1) {
            // console.log(col.claims)
        }
    });
});
claims.some( claim => {
    var col = parseInt(claim.coords.fromLeft);
    var row = parseInt(claim.coords.fromTop);
    var col_end = (col + parseInt(claim.size.x));
    var row_end = (row + parseInt(claim.size.y));
    var isComplete = true;
    for(var r = row; r < row_end; r++) {
        for(var c = col; c < col_end; c++) {
            console.log(array[r][c])
            if(array[r][c].overloadedArea > 1) {
                console.log("f")
                isComplete = false;   
                return false
            }            
        }
    }
    if(isComplete == true) {
        console.log(claim)
        return true
        
    }
})

console.log("Total Area:",(rows*cols),"Overlapping Area:",overlapping);
