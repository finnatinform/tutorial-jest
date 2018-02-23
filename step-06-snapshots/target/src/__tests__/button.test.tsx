import * as React from "react";
import { Button } from './../components/button' ;
import * as Renderer from 'react-test-renderer' ;

it('renders correctly', testRendering);
test('different caption on hover', testHover) ;

function testRendering():void{
    let HButton : Renderer.ReactTestRenderer = Renderer.create( <Button caption="Login" onClick={null} />) ;
    let HTree = HButton.toJSON();
    expect( HTree ).toMatchSnapshot();
}

function testHover():void{
    let HButton : Renderer.ReactTestRenderer = Renderer.create( <Button caption="Login" onClick={null} />) ;
    let HTree : any = HButton.toJSON();
    expect( HTree ).toMatchSnapshot();

    HTree.props.onMouseEnter();
    HTree = HButton.toJSON();
    expect( HTree ).toMatchSnapshot();

    HTree.props.onMouseLeave();
    HTree = HButton.toJSON();
    expect( HTree ).toMatchSnapshot();
}