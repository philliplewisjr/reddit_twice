console.log("MyPosts")

app.controller('MyPostsCtrl', function($scope, $http, postFactory){
	console.log("MyPostsCtrl is loaded")
	postFactory.getPost()
	.then((val) => {
		console.log("val.data", val.data)
		$scope.posts = val.data
	})

  //function that adds thumbs up votes
  $scope.thumbsUp = (key, value)=> {
    value.counter += 1
    //incremented object sent to firebase
    let counterObj = {
    counter: value.counter
    }
    //sends updated count to firebase
    $http.patch(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/newPost/${key}/.json`, JSON.stringify(counterObj))
  }

  //function that subtracts thumbs up votes
  $scope.thumbsDown = (key, value)=> {
    value.counter -= 1
    //decremented object sent to firebase
     let counterObj = {
    counter: value.counter
    }
    //sends updated count to firebase
    $http.patch(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/newPost/${key}/.json`, JSON.stringify(counterObj))
  }
})
