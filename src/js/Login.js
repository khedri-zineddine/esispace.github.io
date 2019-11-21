import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {login} from './UserFunction';
class Login extends Component{
    constructor(props){
        super()
        this.state ={
            email:'',
            motpass:'',
            typeuser:'',
            errors:{}
        }
        this.onChange =this.onChange.bind(this)
        this.onSubmit =this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const user = {
            email:this.state.email,
            motpass:this.state.motpass,
            typeuser:this.state.typeuser
        }
        var islog=login(user)
    }
     render() {
         if(!localStorage.getItem('user')){
            return (
                <div class="cours_login">
            <div class="_elmlg">
                <div class="_idlg">
                    <img class="_lgesi" src="/img/logo_project.png" />
                </div>
                <div class="_frm_lg">
                    <div class="_ttl_cnt">
                        <h1>Conecter vous</h1>
                    </div>
                    <div class="_all_optn">
                        <form class="_frm_ss" noValidate onSubmit={this.onSubmit} autocomplete="off" >
                            <div class="_blc_frm">
                                <input type="text" id="user_insc" value={this.state.email} onChange={this.onChange} class="_identf" name="email" autocomplete="off" required />
                                <label for="user_insc">Email ou nemuro d'insecription</label>
                            </div>
                            <div class="_blc_frm">
                                <input type="password" id="mtpss" name="motpass" class="_motpass" value={this.state.motpass} onChange={this.onChange} autocomplete="off" required/>
                                <label for="mtpss">Mot de pass</label>
                            </div>
                            <div class="_blc_frm">
                                <span class="efet_slc"><img src="/img/right-arrow.png"/></span>
                                <select class="ch_user" name="selectuser" value={this.state.typeuser} onChange={this.onChange}>
                                    <option></option>
                                    <option>Etudiant</option>
                                    <option>Ensiegnant</option>
                                </select>
                            </div>
                            <div class="_blc_frm">
                                <input type="submit" value="Conexion" id="cnt_to" class="cnt_ct" name="cnt_to" required/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
            )
         }else{
             window.location="/"
             return('')
         }
     }
}
export default Login;