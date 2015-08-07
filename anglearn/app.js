(function(){

	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', function(){ 
		this.products = gems;

	});

	/*app.controller('PanelController', function(){ 
		this.tab = 0;

		this.isSelected = function(checkTab)
		{
			return this.tab === checkTab;
		};

		this.selectTab = function(setTab)
		{
			this.tab = setTab;
		};

	});*/

	app.controller('ReviewController', function(){

		this.review = {};

		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};


	});



	var gems= [{
		name: "fold",
		price: 500,
		description: 'shiny joant, i have never seen sum shine so bright mane. if you look at it direectly, man i dont even know',
		canPurchase: false,
		image: 'imgs/doernbochergem.jpg',
		//soldOut: false
		reviews : [{author: "joe", stars: 5, body: "love them! comfortable and they look good"}, {author: "ricky", stars: 1, body: "you call these a product. smfh"}]
	},
	{
		name: "cmd p",
		price: 600.75,
		description: 'joants fie, they are all the rage, hottest gem in the streets atm',
		canPurchase: true,
		image: 'imgs/redgem.gif',
		reviews : []
	},{
		name: "visual",
		price: 1099.99,
		description: 'out of this world fam, you dont even know mars doesnts know the moon doesnt know you dont know whoa man just whoa',
		canPurchase: false,
		image: 'imgs/spacegem.png',
		//soldOut: false
		reviews : [{author: "michael", stars: 5, body: "feels like you're walking on the moon"}, {author: "kobe", stars: 5, body: "I would buy 10 pairs if i could"}]
	},
	{
		name: "xceed the standard",
		price: 450.24,
		description: 'you cant see them in the night, you can see them in the day, theyre not on your level',
		canPurchase: true,
		image: 'imgs/blackgem.png',
		reviews : [{author: "mo", stars: 3, body: "ive had better"}, {author: "anny", stars: 4, body: "amazing but could be better"}]
	}

	]

})();
