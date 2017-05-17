(function () {

	angular.module('qudini.QueueApp')
		.service("customerService", 
		function( $http, $q ) {

			return({
				addCustomer: addCustomer,
				removeCustomer: removeCustomer,
				serveCustomer: serveCustomer
			});

			// addCustomer
			function addCustomer(name, product){
				var request = $http({
					method: "post",
					url: "/api/customer/add",
					params: {
						action: "add"
					},
					data: {
						name: name,
						product: {
							name: product.name
						},
						joinedTime: new Date().toString()
					}
				});

				return (request.then(handleSuccess, handleError));

			}

			function removeCustomer(name){

			}

			function serveCustomer(name){
			}

			function handleError(response) {
				if (!angular.isObject(response.data) ||
					!response.data.message) {
					return ($q.reject("An unknown error occurred."));
				}
			}

			function handleSuccess(response) {
				return (response.data);
			}

		});
})();
