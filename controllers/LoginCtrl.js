console.log("loginCtrl")

app.controller('LoginCtrl', function($scope, $location, authFactory){
	console.log("LoginCtrl is loaded")

  $scope.login = ()=> {
    authFactory.setter($scope.eMail, $scope.passWord)
    .then((data)=>{
      console.log(data)
      $location.url('/myposts')
      $scope.$apply()
    })

  }

})
