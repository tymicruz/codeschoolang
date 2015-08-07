(function(){
	var app = angular.module('store-products',[]);

		app.directive('productPanel', function(){

		return {
			restrict: 'E',
			templateUrl: 'product-panel.html',
			controller: function(){ 
				this.tab = 0;

				this.isSelected = function(checkTab)
				{
					return this.tab === checkTab;
				};

				this.selectTab = function(setTab)
				{
					this.tab = setTab;
				};

			},

			controllerAs: 'panel'
		};
	})
})();