console.log("MyPosts")

app.controller('MyPostsCtrl', function($scope, $http, postFactory){
	console.log("MyPostsCtrl is loaded")
	postFactory.getPost()
	.then((val) => {
		console.log("val.data", val.data)
		$scope.posts = val.data
	})
// up/down vote
	$scope.changeVote = function(vote, flag, event){
    // $scope.vote = vote==flag?'None':flag;
		console.log(event.target.className)
		event.target.className += flag
	}
})



//look up how to add class


//so, something like this?
// $scope.fireButton = function(idfrompost){
// 	var found = $filter('findTheThing')(userdataFromFirebase, idfrompost)[0]
// 	if( idfrompost !== found){
// 		button is pressed
//		patch idfrompost to userdataFromFirebase
// 	}
// }














//
