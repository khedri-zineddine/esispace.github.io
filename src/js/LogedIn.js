import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BarShow from './BarShow';
import BarMessage from './BarMessage';
import AddEtudiant from './AddEtudiant';
import AddEnseignant from './AddEnseignant';
import AddModule from './AddModule';
import AfficheNote from './AfficheNote';
import MesNote from './MesNote';
import Inbox from './Inbox';
import Sent from './Sent';
import NavAdmin from './NavAdmin';
import NavEtudiant from './NavEtudiant';
import NavEnseignant from './NavEnseignant';
import ReduMessage from "./ReduMessage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
  }
class LogedIn extends Component{
    constructor(props){
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            redumsg:false
        }
    }
    redumsg(close){
        if(!close){
            this.setState({
                redumsg:true
            })
        }else{
            this.setState({
                redumsg:false
            }) 
        }
    }
    toinbox(){
        return 
    }
    navUser(){
        if(localStorage.getItem('user')){
            switch(session.data_user){
                case 'a':
                    return(<NavAdmin/>)
                case 'd':
                    return(<NavEtudiant/>)
                case 'n':
                    return(<NavEnseignant/>)
            }
        }
    }
     render() {
         if(localStorage.getItem('user')){
            return (
                <div onPress={this.test}>
                    <header>
                        <nav class="nav_bar">
                            <div class="element_bar">
                                <div class="bar_content">
                                    <div clas="guide-left_option">
                                        <div class="guide-control_list">
                                            <div>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <a class="guide-logo_img" href="/">
                                        <img class="image_logo_name"  alt="esi-work-space" title="esi-space de l'usage de l'ecole" src="/img/logo_project.png" /> 
                                        </a>
                                    </div>
                                    <div class="profile_control">
                                        <BarShow />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                        <div class="list_option">
                            <div class="_listAll">
                                <div class="_list_view">
                                    <div class="number_block">
                                        <div classs="_elem_block">
                                            <div class="_list_block_number">
                                                <div className="_page_block">
                                                    <div className="_dthov">
                                                        <a className="_page_link" onClick={() => this.redumsg(false)} >
                                                            <div className="_icon_page">
                                                                <img className="_icon" alt="" src="/img/plus.png" title="" />
                                                            </div>
                                                            <span>Nouveau message</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <BarMessage/>
                                    </div>
                                    <div class="number_block">
                                    {this.navUser()}
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <div id="gread_contenair_option">
                        <div class="cour_page_select" id="cour_page_sel">
                            <Switch>
                                <Route path="/sent">
                                    <Sent/>
                                </Route>
                                <Route path="/inbox">
                                    <Inbox/>
                                </Route>
                                <Route path="/etudiant/add">
                                    <AddEtudiant/>
                                </Route>
                                <Route path="/enseignant/add">
                                    <AddEnseignant/>
                                </Route>
                                <Route path="/module/add">
                                    <AddModule/>
                                </Route>
                                <Route path="/affichage">
                                    <AfficheNote/>
                                </Route>
                                <Route path="/notes">
                                    <MesNote/>
                                </Route>
                                <Route path="/">
                                    <Redirect to='/inbox'/>
                                </Route>
                            </Switch>
                        </div>
                        </div>
                        {this.state.redumsg ? 
                            <div class="_message_sent">
                                <div class="_supimgslc _clsmsg" onClick={()=>this.redumsg(true)}>
                                    <span></span>
                                    <span></span>
                                </div> 
                                <ReduMessage/>
                            </div> 
                        :''}
                    </div>
            )
         }else{
             window.location="/login";
             return ('')
         }
     }
}
export default LogedIn;