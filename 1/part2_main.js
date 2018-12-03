
var fs = require('fs');
function load() {
    var cont = fs.readFileSync("./inputs.txt").toString().split('\n');
    let c = cont.map( v => parseInt(v));
    return c;
}

function freqOut(adjustments,frequencies = []) {
    let curr = frequencies.length > 0 ? frequencies[frequencies.length - 1] : adjustments[0]
    let start = frequencies.length > 0 ? 0 : 1
    let dupeFound = false;
    
    adjustments.slice(start).some( adj => {    
        let sum = curr+adj            
        if(frequencies.includes(sum)) {
            dupeFound = true;            
            console.log(sum);
            return true;
        }
        console.log(curr+"+"+adj+"="+sum)
        frequencies.push(sum);
        curr = sum;
    })    
    if(!dupeFound) {
        return freqOut(adjustments,frequencies);        
    } else {
        return dupeFound;
    }
}
console.log(freqOut(load()))