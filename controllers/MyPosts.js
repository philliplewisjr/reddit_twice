console.log("MyPosts")

app.controller('MyPostsCtrl', function($scope, $http, postFactory){
	console.log("MyPostsCtrl is loaded")
	postFactory.getPost()
	.then((val) => {
		console.log("val.data", val.data)
		$scope.posts = val.data
	})
// up/down vote
// 	$scope.changeVote = function(vote, flag){
//     $scope.vote = vote==flag?'None':flag;
// 	}
  
  $scope.thumbsUp = (key, value)=> {
    console.log("thumbs up")
    console.log(key)
    console.log(value)
    value.counter += 1
    // value.img = ""
    // value.title = ""
    let counterObj = {
    counter: value.counter
    }

    $http.patch(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/newPost/${key}/.json`, JSON.stringify(counterObj))
  }

  $scope.thumbsDown = (key, value)=> {
    console.log("thumbs down")
    console.log(key)
    console.log(value)
    value.counter -= 1
     let counterObj = {
    counter: value.counter
    }

    $http.patch(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/newPost/${key}/.json`, JSON.stringify(counterObj))
  
  }
})
