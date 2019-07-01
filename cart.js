module.exports = function( ) {

	let cart = { };

	// add items

	function addToCart( product ) {
		cart[ product ] = 1;
		
	} 
	//removing items

	function removeFromCart( product ) {
		cart = { }; 
	}

	//get total numbe r of items
	function getNumberOfItems( ) {
		return Object.keys( cart ).length;
	}

	// get total value of cart
	function getTotalValue( ) {
		
	}

	function getItems( ) {
		return cart;
	}

	return {
		addToCart : addToCart,
		removeFromCart : removeFromCart,
		getTotalValue: getTotalValue,
		getNumberOfItems: getNumberOfItems,
		getItems: getItems
	}

}();







