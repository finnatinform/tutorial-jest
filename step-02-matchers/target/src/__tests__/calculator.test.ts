import Calculator from './../calculator' ;

/**
 * TEST DEFINITIONS
 */
 // Common Matchers
it('adds 1 + 2 to equal 3',testSum); // toBe
it('pows 4 and gives it back to an object', testPow) ; // toEqual

// Truthiness
it('tests truthiness expectations', testTruthiness) ;

// Numbers
it('tests number expectations', testNumbers);
it('test floating point equality', testFloatingPoint)

// Strings
it('tests string operations', testStrings) ;

// Arrays
test('the shopping list only contains healthy items', testArray) ; // test === it

// Exceptions
test('divide by zero is stupid', testExceptions) ;

/**
 * TEST IMPLEMENTATIONS
 */
function testSum():void{
    expect( Calculator.add( 1 , 2 ) ).toBe(3);
}

function testPow():void{
    let HData : any = { origin : 4 } ;
    HData.pow = Calculator.pow ( HData.origin );

    expect( HData ).toEqual( { origin : 4 , pow : 16 } );
}
function testTruthiness():void{
    let HNull = null ;

    expect(HNull).toBeNull();
    expect(HNull).toBeDefined();
    expect(HNull).not.toBeUndefined();
    expect(HNull).not.toBeTruthy();
    expect(HNull).toBeFalsy();
}
function testNumbers():void{
    let HLargeNumber = Calculator.multiply( 25 , 4 );
    let HSmallNumber = Calculator.divide( 100 , 25 );

    expect(HLargeNumber).toBeGreaterThan( 80 );
    expect(HLargeNumber).toBeGreaterThanOrEqual( 100 );
    expect(HSmallNumber).toBeLessThan(10);
    expect(HSmallNumber).toBeLessThanOrEqual(4);

    // toBe and toEqual are equivalent for numbers
    expect(HLargeNumber).toBe(100);
    expect(HSmallNumber).toEqual(4);
}
function testFloatingPoint():void{
    let HNumber = Calculator.add( 0.1 , 0.2 );
    // expect( HNumber ).toBe(0.3);
    expect( HNumber ).toBeCloseTo( 0.3 );
}

function testStrings():void{
    expect('S04').not.toMatch('Deutscher Meister'); // not operator immer möglich
    expect('Ballspielverein').toMatch('Ballspielverein');

    // Regex <3
    expect('finn.zentgraf@inform-software.com').toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function testArray():void{
    let HShoppingList : Array<String> = [
        'beer' ,
        'nachos' ,
        'beef'
    ];

    expect(HShoppingList).toContain('beer');
    expect(HShoppingList).not.toContain('vegetables');
}

function testExceptions():void{
    // Funktion auf keinen Fall ausführen!
    expect(Calculator.divideByZero).toThrow();
    expect(Calculator.divideByZero).toThrow(RangeError);
    // Regex
    expect(Calculator.divideByZero).toThrow(/Otto/);
}