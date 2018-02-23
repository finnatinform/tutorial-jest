import { doAsyncCallbackShit , doAsyncPromiseShit } from './../asyncShit' ;

/**
 * TEST DEFINITIONS
 */
// Use Done for Test
test( 'the data is Borussia Dortmund', testWithDone );

// Use Assertions for Test
test( 'the data is Borussia Dortmund', testwithAssertions );

// Test Promises
test( 'the data is Borussia Dortmund', testPromises );

// Use Await/Async 
test( 'the data is Borussia Dortmund', testPromisesWithAsync );

/**
 * TEST IMPLEMENTATIONS
 */
function testWithDone( _Done : jest.DoneCallback ):void{
    function callback( _Data : string ):void{
        expect( _Data ).toMatch('Borussia Dortmund');
        _Done();
    }

    doAsyncCallbackShit( callback );
}

function testwithAssertions():void{
    // also possible
    expect.assertions(1);
    function callback( _Data : string ):void{
        expect( _Data ).toMatch('Borussia Dortmund');
    }

    doAsyncCallbackShit( callback );
}

function testPromises():Promise<void>{
    // always recommendable
    expect.assertions(1);

    // callback
    function callback( _Data : string ):void{
        expect( _Data ).toMatch('Borussia Dortmund');
    }

    // important: return Promise
    return doAsyncPromiseShit().then(callback);
}

async function testPromisesWithAsync():Promise<any>{
    expect.assertions(1);
    let HData : string = await doAsyncPromiseShit();
    expect( HData ).toMatch('Borussia Dortmund');
}

