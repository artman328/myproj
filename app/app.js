angular.module('myApp',['ui.router'])
	.config(['$stateProvider','$urlRouterProvider','$locationProvider',function(_st,_url,_loc){
		_url.otherwise('/');
		_st.state("home",{
			url: "/",
			template: '<h1>Home</h1>'
		});
		_st.state("teacher",{
			url: "/teacher",
			templateUrl: "views/teacher.html"
		});
		_loc.html5Mode(true);
	}]);