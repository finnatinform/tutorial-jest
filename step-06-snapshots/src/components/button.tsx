import * as React from "react";

export interface IButtonProps {
    caption : string ;
    onClick : () => void ;
}
export interface IButtonState {
    mouseOver : boolean ;
}
export class ButtonState {
    mouseOver : boolean ;
}

export class Button extends React.Component<IButtonProps, IButtonState> {

    constructor( _Props: IButtonProps ){
        super(_Props);
        this.state = new ButtonState();

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    private onMouseEnter():void{
        this.setState({
            mouseOver : true
        });
    }
    private onMouseLeave():void{
        this.setState({
            mouseOver : false
        });
    }

    private getCaption():string{
        if(this.state.mouseOver){
            return `>${this.props.caption}<` ;
        } else {
            return this.props.caption ;
        }
    }
    render() {
        return(
            <div className="button" onClick={this.props.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                {this.getCaption()}
            </div>
        );
    }
}