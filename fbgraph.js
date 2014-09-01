FBGraph = Npm.require('fbgraph');

FBGraph.getFriends = function(fbId, params) {
	params = params || {};

	var friendIds = [];

	Async.runSync(function(done) {
		FBGraph.get('/' + fbId + '/friends', params, function(err, result) {
			if (err) {
				console.log(err);
			} else {
				_.each(result.data, function(friend) {
					friendIds.push(friend.id);
				});
			}
			done(err, result);
		});
	});

	return friendIds;
};
