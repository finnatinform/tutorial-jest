/**
 * TEST DEFINITIONS
 */
test('every developer gets a wage increase', testDefaultMocks) ;
test('every developer gets a wage increase by AG', testOverrideMocks) ;
test('parameter of mock call', testMockCalls)
/**
 * TEST IMPLEMENTATIONS
 */

function testDefaultMocks(): void {
  // Create Mock
  let mockWageIncrease : jest.Mock = jest.fn();

  // Define and run Code
  let HDevelopers: Array<String> = ['Anja', 'Alex', 'Tim', 'Christian', 'Andreas', 'Holger', 'Christoph', 'Finn'];
  HDevelopers.forEach(element => {
    mockWageIncrease();
  });

  // Check Mock
  expect(mockWageIncrease.mock.calls.length).toBe(8);
}

function testOverrideMocks(): void {
  // Any existing instance/class
  let AndreasGladis: any = {
    giveWageIncrease : function(_Developer: string) {
      // lol
      // shall be mocked
    }
  }

  // Override with Mock
  AndreasGladis.giveWageIncrease = jest.fn();

  // Define and run Code
  let HDevelopers: Array<String> = ['Anja', 'Alex', 'Tim', 'Christian', 'Andreas', 'Holger', 'Christoph', 'Finn'];
  HDevelopers.forEach(element => {
    AndreasGladis.giveWageIncrease();
  });

  // Check Mock
  expect( (AndreasGladis.giveWageIncrease as jest.Mock).mock.calls.length ).toBe(8);
}

function testMockCalls():void{
    // Initiales Beispiel, übergebe Element an Mock

    // Create Mock
    let mockWageIncrease : jest.Mock = jest.fn();

    // Define and run Code
    let HDevelopers: Array<String> = ['Anja', 'Alex', 'Tim', 'Christian', 'Andreas', 'Holger', 'Christoph', 'Finn'];
    HDevelopers.forEach(element => {
      mockWageIncrease( element );
    });
  
    // Check Mock
    expect(mockWageIncrease.mock.calls[4][0]).toBe('Andreas'); // erster Parameter des 5 Aufrufs soll 'Andreas' sein
}