var path = require('path');

//Normalise
console.log('Normalise : '+ path.normalize('/test/test1//2slashes/1slashs/tab/..'));

// Join
console.log('join path : '+ path.join('/test','test1','2slashes/1slash','tab','..'));

// Resolve
console.log('resolve : '+path.resolve('pathModule.js'));

// extName
console.log('extname : ' + path.extname('pathModule.js'));

var pathObj = path.parse(__filename);
console.log(pathObj);