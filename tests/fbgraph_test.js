var app = {
	service: 'facebook',
	appId: '741750199204537',
	secret: 'f3fcf473f5a416a6b11a88c558241754'
};

if (Meteor.isServer) {
	Tinytest.add("FBGraph - ServiceConfiguration", function(test) {
		ServiceConfiguration.configurations.remove({
			service: 'facebook'
		});
		ServiceConfiguration.configurations.insert(app);
	});

	Tinytest.add("FBGraph - FBGraph.getFriends", function(test) {
		var friends = FBGraph.getFriends(1406755872880114, {
			access_token: app.appId + '|' + app.secret
		});
		test.equal(3, friends.length, "Expected there to be 3 friends");
	});
}
