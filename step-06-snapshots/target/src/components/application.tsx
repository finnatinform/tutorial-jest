import * as React from "react";
import { Button } from "./button";
import { LoginDialog } from "./login-dialog";

export interface IApplicationProps {}
export interface IApplicationState {
    InLoginMode : boolean ;
}

export class ApplicationState {
    InLoginMode : boolean = false ;    
}

export class Application extends React.Component<IApplicationProps, IApplicationState> {

    constructor( _Props : IApplicationProps ){
        super(_Props);
        this.state = new ApplicationState();

        this.triggerLoginMode = this.triggerLoginMode.bind(this);
    }

    private triggerLoginMode():void{
        this.setState({
            InLoginMode : !this.state.InLoginMode
        }) ;
    }

    private renderContent():JSX.Element{
        if( this.state.InLoginMode ){
            return <LoginDialog onClose={this.triggerLoginMode} />
        } else {
            return <Button caption="Login" onClick={this.triggerLoginMode} /> ;
        }
    }

    render() {
        return(
            <div className="application">
                {this.renderContent()}
            </div>
        );
    }
}