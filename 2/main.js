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
checkSummer(load())