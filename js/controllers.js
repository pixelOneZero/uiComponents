

var uiModule = angular.module("uiComponentApp", []);

uiModule.controller("ViewMoreController", function($scope) {
	$scope.state = { 
		isCollapsed: true
	};
	$scope.text = {
		link: " More"
	}
	$scope.toggle = function() {
		if ($scope.state.isCollapsed) {
			$scope.text.link = " Less";
		}
		else {
			$scope.text.link = " More";
		}
		$scope.state.isCollapsed = !$scope.state.isCollapsed;
	}
})

uiModule.controller("SwitchController", function($scope) {
	
})

