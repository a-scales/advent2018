var fs = require('fs');
function load() {
    var cont = fs.readFileSync("./input.txt").toString().split('\n');
    
    return cont;
}

function checkSummer(codes) {
    // var set = new Map([[2,0],[3,0]])
    var res = {two: 0, three: 0}
    codes.forEach( c => {     
        let code = c.split("")
        var repetitions = {};
        code.forEach( (x) => { repetitions[x] = ( repetitions[x] || 0 ) + 1; })        
        let two = Object.values(repetitions).includes(2);
        let three = Object.values(repetitions).includes(3);
        if(two) {
            res.two = res.two + 1;
        } 
        if(three) {
            res.three = res.three + 1;
        }
    })
    console.log(res.three*res.two);
}

function partTwo(codes) {
    let intersection;
    codes.some( code1 => {
        codes.some( code2 => {            
            let positions = [];
            let diffs = 0;
            code1.split('').forEach( (char, i) => {     
                if(char != code2[i]){
                    positions.push(i);
                    diffs++;
                }
            })
            if(diffs == 1) {
                // console.log(positions)
                console.log(code1.length);
                console.log(code1.slice(0,positions[0]).concat(code1.slice(positions[0]+1)));
            }
        })
    })
    // console.log(intersection);
}
partTwo(load())