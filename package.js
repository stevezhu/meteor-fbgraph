Npm.depends({'fbgraph': '0.2.11'});

Package.describe({
	summary: "Node.js module to access the Facebook graph api.",
	version: "1.0.0",
	git: "https://github.com/stevezhu/meteor-fbgraph.git"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.0');

	api.use('meteorhacks:npm@1.1.3');

	api.addFiles('fbgraph.js');
	api.export('FBGraph');
});

Package.onTest(function(api) {
	api.use([
		'stevezhu:fbgraph',
		'service-configuration',
		'tinytest'
	]);
	api.use('stevezhu:fbgraph');
	api.addFiles('tests/fbgraph_test.js');
});
