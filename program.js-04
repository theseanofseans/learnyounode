
var fs = require('fs')
var content;
function callback(err, data) {
	if (err) throw err;
//	content= data;
console.log( data.toString().split("\n").length - 1 );
}

fs.readFile(process.argv[2], callback);
//console.log( "typeof( content )=" + typeof( content ) );
//console.log( content.toString().split("\n").length - 1 );

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

────────────────────────────────────────────────────────────────────────────────
*/
