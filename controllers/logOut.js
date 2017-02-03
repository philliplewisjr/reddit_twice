console.log("logged out")


app.controller('LogoutCtrl', function($scope, authFactory, $location) {

$scope.signOut = () => {
  authFactory.logOut()
  $location.url("/")
  $scope.$apply()
}

})
