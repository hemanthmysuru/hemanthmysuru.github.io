angular.module('jaxMod', [])
.service('$jax', function($http){
	var baseurl = "http://localhost/framework/";
	return ({
		add: add,
		modify: modify,
		fetch: fetch,
		remove: remove
	})

	function add(u, p) {
		var request = $http({
			method : 'POST',
			headers : {
				/*'Content-Type' : "application/json"*/
				'Content-Type' : "application/x-www-form-urlencoded; charset=UTF-8"
			},
			params:p,
			url : baseurl+u
		});
		return request;
	}

	function modify() {
		return "test";
	}

	function fetch(u, d, p) {
		var request = $http({
			method : 'GET',
			headers : {
				'Content-Type' : "application/json"
			},
			data: d,
			params: p,
			url : baseurl+u
		});
		return request;
	}
	function remove() {
		return "test";
	}


})