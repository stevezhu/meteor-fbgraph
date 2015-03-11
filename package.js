Npm.depends({'fbgraph': '0.3.0'});

var path = Npm.require('path');
var argv = process.argv.slice(2);
var packageDirname;
if (argv[0] === 'test-packages') {
	packageDirname = path.basename(path.resolve(process.argv[process.argv.length - 1]));
} else {
	packageDirname = path.basename(process.cwd());
}

Package.describe({
	summary: "Node.js module to access the Facebook graph api.",
	version: "1.2.0",
	git: "https://github.com/stevezhu/meteor-fbgraph.git"
});

Package.onUse(function(api) {
	api.use('meteorhacks:npm@1.2.2');

	api.addFiles('fbgraph.js', 'server');
	api.export('FBGraph', 'server');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use([
		'service-configuration'
	]);
	api.use(packageDirname);
	api.addFiles('tests/fbgraph_test.js');
});
