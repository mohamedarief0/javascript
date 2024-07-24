// NUMBERS
var x = 1
console.log(x.toString()); // type will be in string

var y = 12.55
console.log(y.toFixed(1)); // 12.5
console.log(y.toFixed(2)); // 12.55
console.log(y.toFixed(4)); // 12.5500

var y = 12.4
console.log(y.toPrecision(1)); // 1e+1
console.log(y.toPrecision(2)); // 12
console.log(y.toPrecision(2)); // 12

var z = "5.123"
console.log(parseInt(z)); // 5 type will be number
console.log(parseFloat(z)); // 5.123 type will be number
 