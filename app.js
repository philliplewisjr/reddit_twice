console.log("app.js loaded")

const app = angular.module('redditApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');




// initialize firebase
var config = {
    apiKey: "AIzaSyDtCeFfh2tqd3mRAhxPQFtgX94VCiSMBD4",
    authDomain: "reddit-remake.firebaseapp.com",
    databaseURL: "https://reddit-remake.firebaseio.com",
    storageBucket: "reddit-remake.appspot.com",
    messagingSenderId: "26243507523"
  };
  firebase.initializeApp(config);







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
  .when('/logout', {
    controller: 'LogoutCtrl',
    templeteUrl: 'partials/logout.html'
  })
	.otherwise({
		redirectTo: '/'
	})



})
