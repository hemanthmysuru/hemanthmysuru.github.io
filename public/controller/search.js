angular.module('searchMod', []).controller('searchCtrl', ['$scope', function ($scope) {

	$scope.search = {
		txt: "Search",
		clz: false
	}

	var fireAjax = function (switcher) {
		setTimeout(function() {
			$scope.$apply(function() {
				$scope.search = { 
					txt: "Search",
					clz: false,
					input: $scope.search.input
				}
				switcher($scope.search);
			})
		}, 5000);
		
	}

	$scope.searcher = function() {

		console.log(typeof $scope.search.input);

		if ($scope.search.input != undefined && $scope.search.input != "") {
			$scope.search = { 
				txt: "Loading...",
				clz: true,
				input: $scope.search.input
			}

			fireAjax(function(res) {
				console.log(res);
			});
		} else {
			console.log("Please enter something");
		}

	}

}])