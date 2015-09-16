
//  * Export a single function that takes exactly the arguments described.
//  * Call the callback exactly once with an error or some data as described.
//  * Don't change anything else, like global variables or stdout.
//  * Handle all the errors that may occur and pass them to the callback.

//module.exports = filteredPrintDir;
//function filteredPrintDir(dir , filter , callback) 
module.exports = function (dir , filter , callback) {
	var fs = require('fs');
	var testStr= '.' + filter;
	var filterDirs= [];

	fs.readdir(dir, function (err, files) {
		if (err) 
			return callback( err);
		var test= true;
		var pos= 0;
		for(i in files) {
			test= true;
			for(var x= 0; x < testStr.length ; x++ )  {
				pos= ( x + files[i].length - testStr.length);
				if ( files[i].charAt(pos) !== testStr.charAt(x) )  {
					test= false;
					break;
				}
			}
			if (test)
				filterDirs.push( files[i] );
		}
		callback(err , filterDirs );
	});
}

