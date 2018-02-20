import * as React from "react";

export interface ILoginDialogProps {
    onClose : () => void ;
}

export interface ILoginDialogState {}

export class LoginDialog extends React.Component<ILoginDialogProps, ILoginDialogState> {
    render() {
        return(
            <div className="login-dialog">
                <div className="login-dialog-header">
                    <div className="login-dialog-header-title">Login</div>
                    <div className="login-dialog-header-close ion-close" onClick={this.props.onClose}></div>
                </div>
                <div className="login-dialog-content">
                    <input name="username" placeholder="username" />
                    <input name="password" placeholder="password" type="password" />
                </div>                
            </div>
        );
    }
}