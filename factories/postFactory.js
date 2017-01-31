console.log("postFactory.js loaded")

app.factory('postFactory', function($http){
	return {
		getPost: function() {
			return $http.get(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/newPost.json`)
				.then(function(val) {
					console.log("val", val)
					return val
				})
		}
	}
})
