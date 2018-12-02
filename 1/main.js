var fs = require('fs');
function start() {
    var cont = fs.readFileSync("./inputs.txt").toString().split('\n');
    let c = cont.map( v => parseInt(v));
    freqShift(c);
}
function freqShift(f) {
    console.log( f.reduce( (p, c) => p + c ));
}

start();