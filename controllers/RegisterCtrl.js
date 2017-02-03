console.log("RegisterCtrl")

app.controller('RegisterCtrl', function($scope,authFactory, $http){
	console.log("RegisterCtrl is loaded")

  $scope.registerUser = function() {
    console.log('register button working')
    //register object
    let registerData = {
      name: $scope.userName,
      passWord: $scope.userPass,
      email: $scope.userEmail
    }

    console.log(registerData)
    authFactory.getAuth(registerData)
    .then((data)=>{
      console.log(data)
    })
  }

})
