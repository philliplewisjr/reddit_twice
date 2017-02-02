console.log("app.js loaded")

const app = angular.module('redditApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');




// initialize firebase







	$routeProvider
	.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'partials/main.html'
	})
	.when('/register', {
		controller: 'RegisterCtrl',
		templateUrl: 'partials/register.html'
	})
	.when('/login', {
		controller: 'LoginCtrl',
		templateUrl: 'partials/login.html'
	})
	.when('/post', {
		controller: 'NewPostCtrl',
		templateUrl: 'partials/newPost.html'
	})
	.when('/myposts', {
		controller: 'MyPostsCtrl',
		templateUrl: 'partials/myPosts.html'
		// resolve: checkForAuth
	})
	.otherwise({
		redirectTo: '/'
	})



})









