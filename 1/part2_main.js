
var fs = require('fs');
function load() {
    var cont = fs.readFileSync("./inputs.txt").toString().split('\n');
    let c = cont.map( v => parseInt(v));
    return c;
}

let __seenFrequencies = {}
function freqOut(f,seenFrequencies) {
    let isRepeated = false;
    let sf = Object.create(seenFrequencies);
    f.reduce( (p, c) => {        
        console.log(typeof sf[p] === 'undefined')
        if( sf[p] == "undefined") {
            sf[p] = "1";                       
        } else {            
            rep = p
            isRepeated = true; 
        }
        return (p + c)
    })
    if(isRepeated == false) {
        return freqOut(f, sf)
    }
    return([rep,sf]); 
}
console.log(freqOut(load(),__seenFrequencies)[1])