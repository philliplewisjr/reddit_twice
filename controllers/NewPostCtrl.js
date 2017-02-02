console.log("NewPostCtrl")

app.controller('NewPostCtrl', function($scope, $http){
	console.log("NewPostCtrl is loaded")

	//function that creates new post
	$scope.makeNewPost =function() {
		console.log("button clicked")

		let newPosts = {
			title: $scope.titleTextBox,
			url: $scope.urlTextBox,
			img: $scope.imageUrlTextBox,
			counter: 1
		}

		//function that post object to firebase
		$http.post(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/newPost.json`, JSON.stringify(newPosts))
	}
})
