import Loader = require('./../loader');

/**
 * TEST DEFINITIONS
 */

it('should not load data, if offline', testNotLoadingData);
it('should load data', testLoadingData) ;

/**
 * TEST IMPLEMENTATIONS
 */
function testNotLoadingData():void{
    Loader.loadData = jest.fn();

    Loader.doSomething();
    expect(Loader.loadData).toHaveBeenCalledTimes(0);
}

function testLoadingData():void{
    let DataLoader = require('./../loader');
    DataLoader.loadData = jest.fn();

    DataLoader.isOnline = jest.fn().mockReturnValue(true);

    DataLoader.doSomething();
    expect(DataLoader.loadData).toHaveBeenCalledTimes(1);
}