import Calculator from './../calculator' ;

/**
 * TEST DEFINITIONS
 */
it('adds 1 + 2 to equal 3',testSum);


/**
 * TEST IMPLEMENTATIONS
 */
function testSum():void{
    expect( Calculator.add( 1 , 2 ) ).toBe(3);
}