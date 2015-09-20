

/*
 FILTERED LS
 Exercise 5 of 13

Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

-------------------------------------------------------------------------------

## HINTS

The fs.readdir() method takes a pathname as its first argument and a callback as its second. The callback signature is:

*/
//    function callback (err, list) { /* ... */ }
/*

where list is an array of filename strings.

Documentation on the fs module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html#fs_fs_readdir_path_callback

You may also find node's path module helpful, particularly the extname method.

Documentation on the path module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html

-------------------------------------------------------------------------------

 » To print these instructions again, run: learnyounode print
 » To execute your program in a test environment, run: learnyounode run program.js
 » To verify your program, run: learnyounode verify program.js
 » For help run: learnyounode help
*/


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

var fs = require('fs');
var dir= process.argv[2];
var filter= process.argv[3];
var testStr= '.' + filter;

function readdirCallback(err, files) {
	if (err) throw err;
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
			console.log(files[i] );
	}
}

fs.readdir(dir, readdirCallback);

