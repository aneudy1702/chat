	        // create the module and name it scotchApp
	       var stagezApp = angular.module('stagezApp', ['ngRoute', 'routeStyles']);


	        // configure our routes
	       stagezApp.config(function($routeProvider) {
	           //$routeProvider what is this?

	           // route for the home page
	           .when('/', {
	               templateUrl: 'partials/home.html',
	               controller: 'mainController',
	               css: 'style/style.css',
	           })

	           // route for the friends page
	           .when('/friends', {
	               templateUrl: 'partials/friends.html',
	               controller: 'friendsController',
	               css: 'style/bootstrap.css',
	           })

	           // rout for the messages page
	           .when('/messages', {
	               templateUrl: 'partials/private.html',
	               controller: 'messagesController',
	               //	         css: 'style/bootstrap.css',
	           })


	           .when('/settings', {
	               templateUrl: 'partials/settings.html',
	               controller: 'settingsController',
	               //	         css: ['style/bootstrap.css', 'style/profile.css'],
	           })
	           // route for the profile page
	           .when('/profile', {
	               templateUrl: 'partials/profile.html',
	               controller: 'profileController',
	               //	         css: ['style/bootstrap.css', 'style/profile.css'],
	           })
	       });

	        // create the controller and inject Angular's $scope


	       stagezApp.controller('mainController', function($scope) {
	           // create a message to display in our view
	           $scope.message = 'Everyone come and see how good I look!';
	       });

	       stagezApp.controller('homeController', function($scope) {
	           $scope.message = 'Look! I am an about page.';

	       });


	       stagezApp.controller('friendsController', function($scope) {
	           $scope.message = 'Look! I am an about page.';

	       });

	       stagezApp.controller('settingsController', function($scope) {
	           //		$scope.message = 'Look! I am an about page.';


	       });

	       stagezApp.controller('privateController', function($scope) {
	           $scope.message = 'Contact us! JK. This is just a demo.';

	       });

	       stagezApp.controller('profileController', function($scope) {
	           $scope.message = 'Look! I am an about page.';

	           var TooltipDemoCtrl = function($scope) {
	               $scope.dynamicTooltip = "Hello, World!";
	               $scope.dynamicTooltipText = "dynamic";
	               $scope.htmlTooltip = "I've been made <b>bold</b>!";
	           };
	       });
