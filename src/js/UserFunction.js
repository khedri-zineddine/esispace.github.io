import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import {
    Link
  } from "react-router-dom";
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
export const login = user =>{
    flash('alaways_','en cours de conexion ...',false)
    return axios
        .post('http://127.0.0.1:8000/api/login',{
            email:user.email,
            motpass:user.motpass,
            typeuser:user.typeuser
        },{
            headers:{'Content-type':'application/json'}
        })
        .then(res =>{
            var userloged=res.data.data
            if(userloged!=''){
                localStorage.setItem('user', JSON.stringify(userloged));
                flash('done_','votre conexion et valid',true)
                window.location="/"
                return userloged;
            }else{
                alert(userloged)
                console.log(userloged)
            }
        })
        .catch(err =>{
            alert(err)
        })
}
class Selectmsg extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           msg:this.slctmsg()
        }
    }
    slctmsg(){
        flash('alaways_','votre message en cours de chargement ...',false)
        axios
            .post('http://127.0.0.1:8000/api/message/slctmsg',{
                idmsg:this.props.match.params.id
            })
            .then(res =>{
                flash('done_','votre message et bien charger',true)
                this.setState({
                    msg:<div>
                        <div class="__blcntrlmsg">
                            <Link to={getback()} class="__cntmsgslct __backmsg">
                                <img src="/img/back.png" alt="" class=""/>
                            </Link>
                        </div>
                        <div class="_athinfmsg">
                            <div class="__hosntmsg">
                                <div class="__mnsusr">
                                    <span class="___nm">{res.data.data.msg[0].prenom} {res.data.data.msg[0].nom}</span>
                                    <div class="____elm">
                                        <span class="___fch"></span>
                                        <div class="___mlsnt">
                                        <span>{res.data.data.msg[0]. util_envoyer}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="__tousms">
                                    <strong>à:</strong>
                                    <span>{res.data.data.msg[0].util_recevoir}</span>
                                </div>
                            </div>
                        </div>
                        <div class="____allmsgcntnt">
                            <div class="_____msgtxt">
                                <span>{res.data.data.msg[0].text}</span>
                            </div>
                            <span class="___ttlfls">Fichier associè</span>
                            <div class="____flasc">
                            {res.data.data.filemsg.length>0 ?
                            Array.isArray(res.data.data.filemsg) && res.data.data.filemsg.map(file => {
                                var ext=file.chemain.split('.')[file.chemain.split('.').length-1];
                                var extn = ['jpg', 'png', 'jpeg'];
                                if($.inArray(ext, extn) != -1){
                                    ext=file.chemain
                                }else{
                                    ext='/img/'+ext+'.png'
                                }
                                return (
                                    <div class="____isfl">
                                        <div class="___tpefle">
                                            <img src={ext} alt="" class=""/>
                                        </div>
                                        <div class="__flmne">
                                            {file.name_file}
                                        </div>
                                            <a href={file.chemain} download>
                                                <div class="__btdwnld">
                                                    <img src="/img/download.png" alt="" class=""/>
                                                </div>
                                            </a>
                                    </div>
                                )
                            }) :<strong>il y'a auccun fichier associé</strong>
                            }
                            </div>
                        </div>
                    </div>
                })
                console.log(res)
            })
            .catch(err =>{
                
                alert(err)
            })
    }
    render(){
        return(
            <div class="_rdmsg">{this.state.msg}</div>
        )
    }

}
export default Selectmsg;
export function flash(WrongType, WrongText, Stop) {
    $('.___erors_show').remove();
    var wrong = '<div class="___erors_show ' + WrongType + '"><style>.___erors_show {position: fixed;z-index: 300;bottom: 20px;left: 20px;padding: 8px 25px;border-radius: 10px;color: #fff;box-shadow: 1px 1px 10px #3a38389a;font-size: 17px;font-weight: 600;}.alaways_ {background: #007ce6c9;}.fail_ {background: #ff5f5f;}.done_ {background: #41d876a6;}</style><span>' + WrongText + '</span></div>';
    $('body').append(wrong);
    if (Stop) {
        $('.___erors_show').animate({
            bottom: '20.1px'
        }, 3000, function() {
            $('.___erors_show').animate({
                bottom: '50px',
                opacity: '0'
            }, 500, function() {
                $('.___erors_show').remove();
            })
        })
    }
}
export function getback(){
    if(window.location.pathname.indexOf('/sent')!=-1){
        return '/sent'
    }else {
        return '/inbox'
    }
}