console.log("MyPosts")

app.controller('MyPostsCtrl', function($scope, $http, $filter, postFactory, userFactory){
	var tester = []
	console.log("MyPostsCtrl is loaded")
	postFactory.getPost()
	.then((val) => {
		console.log("val.data", val.data)
		$scope.posts = val.data
	})

	userFactory.getUser()
	.then((val) => {
		console.log("user val.data", val.data)
		userData = val.data
		console.log("hello ",userData[0])
		tester= []
		console.log("TESTING ",tester)
		$scope.users = val.data






		angular.forEach(userData, function(value, key) {
			// result[key] = key;
			console.log("this is a key ", key)
			console.log("this is a value ", value)
			tester.push(key);


// Find firebase.auth().currentUser
// using this you can skip the array of users and go straight to trying to
// checking an array of post id's

// and look up the band_libraies github repo thing of Caitlin's




			// console.log("this is a key" + key)
			// console.log("this is a value" + value)
			// console.log("this is result[key]" + result[key])
			// boardPins = result[key].pins
			// boardTitle = result[key].title
			// if( boardTitle == name) {
			//
			//
			//   var picture
			//
			//   angular.forEach(boardPins, function(pinNumber, pinId) {
			//     picture = pinNumber.pin_id
			//
			//     this.push(picture);
			//   }, arraything);
			// }
		})
		console.log("This is the tester ",tester)
var found = $filter('filter')(tester, "Lewis")[0]
console.log("this is a thing ", found)




	})

	        // var result = {};
	        // var boardTitle
	        // var boardPins



	// function fireButton(){
		// var found = $filter('filter')(value, "title")[0]
		// if( "Akoben" == found.first_name){
			// console.log("user stuff here ",found)
			// button is pressed
			// patch key to userdataFromFirebase
		// }
	// }
	// fireButton()








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
