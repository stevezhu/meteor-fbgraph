Npm.depends({'fbgraph': '0.2.11'});

Package.describe({
	summary: "Node.js module to access the Facebook graph api.",
	version: "1.1.0",
	git: "https://github.com/stevezhu/meteor-fbgraph.git"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.0');

	api.use('meteorhacks:npm@1.2.0');

	api.addFiles('fbgraph.js', 'server');
	api.export('FBGraph', 'server');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use([
		'service-configuration'
	]);
	api.use('stevezhu:fbgraph');
	api.addFiles('tests/fbgraph_test.js');
});
