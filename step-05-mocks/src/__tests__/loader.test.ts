import Loader from './../loader';

let DataLoader : Loader ;

/**
 * TEST DEFINITIONS
 */

it('should not load data, if offline', testNotLoadingData);
it('should load data', testLoadingData) ;

/**
 * TEST IMPLEMENTATIONS
 */
function testNotLoadingData():void{
    DataLoader = new Loader();
    DataLoader.loadData = jest.fn();

    DataLoader.doSomething();
    expect(DataLoader.loadData).toHaveBeenCalledTimes(0);
}

function testLoadingData():void{
    DataLoader = new Loader() ;
    DataLoader.loadData = jest.fn();

    DataLoader.isOnline = jest.fn().mockReturnValue(true);

    DataLoader.doSomething();
    expect(DataLoader.loadData).toHaveBeenCalledTimes(1);
}