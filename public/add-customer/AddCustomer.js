(function () {

	angular.module('qudini.QueueApp')
		.directive('addCustomer', AddCustomer);

	AddCustomer.$inject = ['$http', 'customerService'];

	function AddCustomer($http, customerService) {
		return {
			restrict: 'E',
			scope: {
				onAdded: '&'
			},
			templateUrl: '/add-customer/add-customer.html',
			link: function (scope) {

				scope.products = [
					{ name: 'Grammatical advice' },
					{ name: 'Magnifying glass repair' },
					{ name: 'Cryptography advice' }
				];

				scope.addCustomer = function () {
					customerService.addCustomer(scope.name, scope.product);
					scope.onAdded();
					// clear the form
					scope.name = "";
					scope.product = "";
				};
			}
		}
	};

})();
