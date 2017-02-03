// console.log("MyPosts")

app.controller('MyPostsCtrl', function($scope, $http, $filter, postFactory, userFactory, authFactory){
	var tester = []
	var keyLog = []
	var postlog = []
	var userData

	console.log("MyPostsCtrl is loaded")
// firebase.auth().onAuthStateChanged

	postFactory.getPost()
	.then((val) => {
		// console.log("val.data", val.data)
		$scope.posts = val.data
	})
	userFactory.getUser()
	.then((val) => {
		// console.log("user val.data", val.data)
		userData = val.data
		// console.log("hello ",userData[0])
		// tester= []
		// console.log("TESTING ",tester)
		$scope.users = val.data
		console.log("userData ",userData)


	})


  //function that adds thumbs up votes
  $scope.thumbsUp = (key, value)=> {

		let currentPerson = firebase.auth().currentUser.email
		// console.log(currentPerson)
		angular.forEach(userData, function(value, key) {
			// result[key] = key;

			// console.log("this is a key ", key)
			// console.log("this is a value ", value)
			// buttonHits = value.myPosts;



			tester.push(value.email);
			keyLog.push(key);
			console.log(tester)


		})

		for (var i =0; i < tester.length; i++){
			if(tester[i] === currentPerson) {
				hereNow = keyLog[i];
				console.log("tester ",tester[i] + " currentPerson ", currentPerson)
				//need to use [] instead of . for variables in the daisy chain of code
				// keys and values.
				console.log("wonder if ", userData[hereNow])
				console.log("name test ", userData)
			} else {
				console.log("nope")
			}
		}



		// console.log("This is the tester ",tester)
		var found = $filter('filter')(tester, currentPerson)[0]
		console.log("this is a thing ", found)
		// user = firebase.auth().currentUser
		// console.log("current user is ",user)

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
  // $http.get(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/users.json`)
  // .then((data)=>{
  //   $scope.usersObj = data.data
  //   $scope.key = key
  //   $scope.currentUser = data.data.$scope.key.email
  //   console.log($scope.currentUser)
  // })

})



//look up how to add class


//so, something like this?
// $scope.fireButton = function(key){
// 	var found = $filter('findTheThing')(userdataFromFirebase, key)[0]
// 	if( key !== found){
// 		button is pressed
//		patch key to userdataFromFirebase
// 	}
// }














//
