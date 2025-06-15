var os = require('os');

console.log('Endianness : '+ os.endianness());
console.log('type : '+ os.type());
console.log('Platform : '+ os.platform());
console.log('Total Memory : '+ os.totalmem());
console.log('Free Memory : '+ os.freemem());