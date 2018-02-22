import Loader = require('./../loader');

/**
 * TEST DEFINITIONS
 */

afterEach(()=>{
    jest.restoreAllMocks(); // only works on spyOn
    // reset
    Loader.__Items = [] ;
});

it('should not load data, if offline', testNotLoadingData);
it('should load data', testLoadingData) ;
it('should save loaded items in property', testSavingData);
it('should throw an error if server is not available', testFailingLoad) ;

/**
 * TEST IMPLEMENTATIONS
 */
function testNotLoadingData():void{
    jest.spyOn(Loader,'loadData');

    jest.spyOn(Loader,'isOnline').mockReturnValue(false);

    Loader.doSomething();
    expect(Loader.loadData).toHaveBeenCalledTimes(0);
}

function testLoadingData():void{
    jest.spyOn(Loader,'loadData');

    console.log(Loader.isOnline());
    Loader.doSomething();
    expect(Loader.loadData).toHaveBeenCalledTimes(1);
}

function testSavingData():void{
    jest.spyOn(Loader,'loadData').mockImplementation( loadFakeDataSuccess );
    Loader.doSomething();
    expect(Loader.__Items).toEqual([ 'Test1' , 'Test2' ]);
}
function testFailingLoad():void{
    // Needed for exceptions
    expect.assertions(2);

    jest.spyOn(Loader,'loadData').mockImplementation( loadFakeDataFailed );
    try {
        Loader.doSomething();
    } catch (error) {
        expect(Loader.__Items).toEqual([]);
        expect(error.message).toMatch('loading data failed');
    } 
}

function loadFakeDataSuccess():void{
    this.onLoadingDataSucceeded( [ 'Test1' , 'Test2' ] );
}

function loadFakeDataFailed():void{
    this.onLoadingDataFailed();
}