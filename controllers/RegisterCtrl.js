console.log("RegisterCtrl")

app.controller('RegisterCtrl', function($scope,authFactory, $http, $location){
	console.log("RegisterCtrl is loaded")

  //capture object and send to firebase
  $scope.registerUser = function() {

    //register object that is sent to firebase
    let registerData = {
      name: $scope.userName,
      passWord: $scope.userPass,
      email: $scope.userEmail,
			myPosts: ""
    }
		authFactory.postUser(registerData, authFactory.getUID())
	// .then(function() {
	// 	$location.url('/myposts')
	// })

    console.log(registerData)
    authFactory.getAuth(registerData.email, registerData.password)
    .then((data)=>{
      console.log(data)
      $scope.uid = data
      $http.post(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/users/.json`, {
        uid: $scope.uid,
        email: $scope.userEmail
      })
      $location.path('/myposts')
    })
  }

})
