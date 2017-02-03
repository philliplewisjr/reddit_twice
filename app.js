
// initialize firebase
var config = {
    apiKey: "AIzaSyDtCeFfh2tqd3mRAhxPQFtgX94VCiSMBD4",
    authDomain: "reddit-remake.firebaseapp.com",
    databaseURL: "https://reddit-remake.firebaseio.com",
    storageBucket: "reddit-remake.appspot.com",
    messagingSenderId: "26243507523"
  };
  firebase.initializeApp(config);

	    const checkForAuth = {
	      checkForAuth ($location, $rootScope) {
	        // http://stackoverflow.com/questions/37370224/firebase-stop-listening-onauthstatechanged
	        const authReady = firebase.auth().onAuthStateChanged(user => {
	          authReady()
	          if (!user) {
	          	// console.log('User signed out.  $rootScope.uid is ' + $rootScope.uid)
	            // $location.url('/login')
	          }
	          else {
	          	$rootScope.uid = firebase.auth().currentUser.uid
	          	// console.log('User signed in.  $rootScope.uid is ' + $rootScope.uid)
	          }
	        })
	      }
	    }



console.log("app.js loaded")

const app = angular.module('redditApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');









	$routeProvider
	.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'partials/main.html',
		resolve : checkForAuth

	})
	.when('/register', {
		controller: 'RegisterCtrl',
		templateUrl: 'partials/register.html',
		resolve : checkForAuth

	})
	.when('/login', {
		controller: 'LoginCtrl',
		templateUrl: 'partials/login.html',
		resolve : checkForAuth

	})
	.when('/post', {
		controller: 'NewPostCtrl',
		templateUrl: 'partials/newPost.html',
		resolve : checkForAuth

	})
	.when('/myposts', {
		controller: 'MyPostsCtrl',
		templateUrl: 'partials/myPosts.html',
		resolve: checkForAuth
	})
	.otherwise({
		redirectTo: '/'
	})



})
