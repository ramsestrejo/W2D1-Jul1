let cart = require( './cart' );
let assert = require( 'assert');
let should = require( 'chai').should();
let expect = require( 'chai' ).expect;

beforeEach( 'Setting up shopping cart ' , function( ) {
	cart.addToCart( '001');	
	console.log( cart.getNumberOfItems( ) );
	console.log( cart.getItems( ) );
});

afterEach( 'Checking size of cart ' , function( ) {
	console.log( cart.getNumberOfItems( ) );
})

describe( 'Adding items to shopping cart ' , function(  ){
	it( 'Adding 1 item to cart and size is one' , function( ) {
		assert.equal( cart.getNumberOfItems( ) , 1 );
	});
});

describe( 'Removing items from shopping cart ' , function( ) {
	it( 'Removing 1 item and the cart should be empty' , function ( ) {
		cart.removeFromCart( '001' );
		assert.equal( cart.getNumberOfItems( ) , 0 );
	})
});

describe( 'Checking product id ' , function( ) {
	it( 'Checking product id is 001 ', function( ) {
		cart.getItems( ).should.have.property( '001' );
		expect( cart.getItems( ) ).to.have.property( '002' );
	})
})







