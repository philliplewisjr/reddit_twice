console.log("MyPosts")

app.controller('MyPostsCtrl', function($scope, $http, postFactory){
	console.log("MyPostsCtrl is loaded")
	postFactory.getPost()
	.then((val) => {
		console.log("val.data", val.data)
		$scope.posts = val.data
	})
// up/down vote
	$scope.changeVote = function(vote, flag){
    $scope.vote = vote==flag?'None':flag;
	}
})
