console.log("MainCtrl")

app.controller('MainCtrl', function($scope, $http, postFactory){
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
