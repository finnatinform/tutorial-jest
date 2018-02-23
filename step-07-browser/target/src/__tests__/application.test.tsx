import * as puppeteer from "puppeteer";

// Jest Configuration

var HBrowser : puppeteer.Browser ;
var HPage : puppeteer.Page ;

beforeAll(async () => {

    let HWidth : number = 1920 ;
    let HHeight : number = 1080 ;

    HBrowser = await puppeteer.launch();

    HPage = await HBrowser.newPage();

    await HPage.setViewport( { width : HWidth , height : HHeight } );
});

afterAll(() => {
    HBrowser.close();
});

test('open dialog and type username', testLoginForm,16000)

// Selectors : https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
async function testLoginForm():Promise<void>{
    await HPage.goto('file:///E:/GitHub/tutorial-jest/step-07-browser/target/index.html');
    await HPage.waitForSelector(".application");
    await HPage.click(".button");
    await HPage.waitForSelector(".login-dialog");
    await HPage.click('input[name=username]');
    await HPage.type('input[name=username]', 'fzentgra');

    let HInput : puppeteer.ElementHandle = await HPage.$('input[name=username]') ;
    let HTemp = await HInput.getProperty('value');
    let text : string = await HTemp.jsonValue();

    expect(text).toMatch('fzentgra');

    await HPage.screenshot(
        {
            path : 'screenshot.png' ,
            fullPage : true
        }
    ); 
}