console.log("NewPostCtrl")

app.controller('NewPostCtrl', function($scope, $http){
	console.log("NewPostCtrl is loaded")

	$scope.makeNewPost =function() {
		console.log("button clicked")
		let newPosts = {
			title: $scope.titleTextBox,
			url: $scope.urlTextBox,
			img: $scope.imageUrlTextBox
		}
		$http.post(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/newPosts.json`, JSON.stringify(newPosts))
		console.log(newPosts)
	}
})




