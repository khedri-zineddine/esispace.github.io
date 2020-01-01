import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery'
import Load from './../load.js';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Selectmsg, {flash} from './UserFunction'
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
class Sent extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           lstmsg:this.getmsg(),
        }
    }
    getmsg(){
        flash('alaways_','chargement des message et en cours ...',false)
        $.post('/api/message/sent',{
            email:session.email,
            motpass:session.motpass
        })
        .done(res=>{
            flash('done_','fin de chargement',true)
            var lstmsg=res.data.msg
            this.setState({
                lstmsg
            })
            console.log(res)
           $('.nb__msg').html(res.data.nb)
       })
       .fail(err=>{
           console.log(err)
       })
    } 
     render() {
        return (
            <div class="cour_msg_recv">
                <div class="_ttlttl">
                    <span class="_btn" id="ttltl">message envoyé</span>
                </div>
                <div class="_descrinf">
                    <div class="_ttllst _toblc">
                        <h1>message envoyé</h1>
                        <span class="udub-slant"><span></span></span>
                    </div>
                    <div class="_nbttlmsg">
                        <span class="">nombre de message : <span class="nb__msg"></span> </span>
                    </div>
                </div>
                <div class="_cntnt_msg">
                    <div class="_____cormsg">
                    <Switch>
                        <Route path="/sent/show/:id" render={(props) => <Selectmsg {...props}  />}>
                        </Route>
                        <Route path="/sent">
                            {this.state.lstmsg ? 
                                this.state.lstmsg.length>0 ?
                                Array.isArray(this.state.lstmsg) && this.state.lstmsg.map(msg => {
                                    return (
                                        <div class="_msg_" >
                                            <Link to={"/sent/show/"+msg.idmessage}>
                                                <div class="_name_info">
                                                    <div class="_rglinfo">
                                                        <span class="_usenv">{msg.nom} {msg.prenom}</span>
                                                        <span class="_pttmsg">{msg.text}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }) :<strong>vous avez envoyer aucun message</strong>
                             :<Load/> }
                        </Route>
                    </Switch>
                    </div>
                </div>
            </div>
        )
     }
}
export default Sent;