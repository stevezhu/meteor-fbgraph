Npm.depends({'fbgraph': '1.2.0'});

Package.describe({
	name: "stevezhu:fbgraph",
	summary: "Node.js module to access the Facebook graph api.",
	version: "2.1.0",
	git: "https://github.com/stevezhu/meteor-fbgraph.git"
});

Package.onUse(function(api) {
	api.use('meteorhacks:async@1.0.0');
	api.use('underscore@1.0.8');

	api.addFiles('fbgraph.js', 'server');
	api.export('FBGraph', 'server');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('service-configuration');
	api.use('stevezhu:fbgraph');
	api.addFiles('tests/fbgraph_test.js');
});
