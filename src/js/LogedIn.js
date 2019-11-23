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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
  }
class LogedIn extends Component{
    constructor(props){
        super(props)
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
                            </Switch>
                        </div>
                        </div>
                    </div>
            )
         }else{
             window.location="/login";
             return ('')
         }
     }
}
export default LogedIn;