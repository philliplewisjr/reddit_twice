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



// I need to get information from the user specifically and the post specifically
// which means either we add the uid to each post for everyone who has voted on it
// or add the postid to a section under each use based on if they voted on it

// But this ^ is a secondary problem as you still need to figureout how to propberly
// stop the button from being hit more than once, than you can tie that to a user specifically

// check the user for a matching id specific to the post, if the id is there the button
// cannot be pushed, if the id is not there, patch the id into the information and allow the button push

// could I just pass the value/key in twice? It would be the same thing and the fucntion woldn't fire if
// it didn't exist, like a promise? so something like;
// if(value == thing.value){
//
//}


//you need to filter things, so use filter. You have to pass $filter into the controller or factory that
//you use, but it should give you the ability to filter the results you get from firebase and allow you
//to make a proper function of some sort.  The objects/arrays you are looking to filter are either
// users or newposts.  I would say filter current user, would have to give them a sub section
// that can be patched with post ids.  Below is the example I found for the filter in the controller.


// var app = angular.module('plunker', []);
//
// app.controller('MainCtrl', function($scope, $filter) {
//
//   var foo = {
//     "results": [{
//       "id": 1,
//       "name": "Test"
//     }, {
//       "id": 2,
//       "name": "Beispiel"
//     }, {
//       "id": 3,
//       "name": "Sample"
//     }]
//   };
//
//   var result = $filter('filter')(foo.results, {id:2})[0];
//
//   $scope.name = result.name;
// });



//so, something like this?
// $scope.fireButton = function(idfrompost){
// 	var found = $filter('findTheThing')(userdataFromFirebase, idfrompost)
// 	if( idfrompost !== found){
// 		button is pressed
//		patch idfrompost to userdataFromFirebase
// 	}
// }














//
