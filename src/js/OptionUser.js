import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class OptionUser extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
        }
    }
    logout(e){
        e.preventDefault();
        localStorage.removeItem('user')
        window.location="/login"
    }
     render() {
        return (
            <div>
                <span className="_option_list">
                </span>
                <div className="list_user_deroll"> 
                    <div className="show_option_user" >
                        <div className="name_option">
                            <a className="rederect_vers" href="/profile">
                                <div className="_logo_option">
                                    <img src="img/user.png"/>
                                </div>
                                <span>Profile</span>
                            </a>
                        </div> 
                        <div className="name_option">
                            <a className="rederect_vers" onClick={this.logout}>
                                <div className="_logo_option">
                                    <img src="img/logout.png"/>
                                </div>
                                <span>Deconexion</span>
                            </a>
                        </div>                        
                    </div>
                </div>
            </div>
            
        )
     }
}
if (document.getElementById('show_list_bar')) {
    ReactDOM.render(<OptionUser />, document.getElementById('show_list_bar'));
}