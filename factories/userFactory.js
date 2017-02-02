console.log("userFactory.js loaded")

app.factory('userFactory', function($http){
	return {
		getUser: function() {
			return $http.get(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/users.json`)
				.then(function(val) {
					console.log("user val", val)
					return val
				})
		}
	}
})
