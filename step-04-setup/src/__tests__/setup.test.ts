/**
 * TEST DEFINITIONS
 */
 
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => myTest( 1 ) );

// sub block
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => myTest( 2 ) );
});

/**
 * TEST IMPLEMENTATIONS
 */
function myTest( _Number : number ):void{
    console.log( _Number + ' - test');
}