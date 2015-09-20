
function filteredPrintDir(dir , filter , callback) {
	var fs = require('fs');
	var testStr= '.' + filter;
	function readdirCallback(err, files) {
		if (err)
			callback( err);
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
				callback(err , files[i] );
		}
	}

	fs.readdir(dir, readdirCallback);
}

filteredPrintDir( process.argv[2] , process.argv[3] , console.log );

