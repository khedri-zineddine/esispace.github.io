import React, { Component } from 'react';
import {flash} from './UserFunction'
import axios from 'axios';
import Load from './../load.js';
class Login extends Component{
    constructor(props){
        super()
        this.state ={
            email:'',
            motpass:'',
            issent:false
        }
        this.onChange =this.onChange.bind(this)
        this.onSubmit =this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        this.setState({
            issent:true
        })
        const user = {
            email:this.state.email,
            motpass:this.state.motpass
        }
        flash('alaways_','en cours de conexion ...',false)
        axios
            .post('http://127.0.0.1:8000/api/login',{
                email:user.email,
                motpass:user.motpass,
                typeuser:user.typeuser
            },{
                headers:{'Content-type':'application/json'}
            })
            .then(res =>{
                this.setState({
                    issent:false
                })
                var userloged=res.data.data
                if(userloged!=''){
                    localStorage.setItem('user', JSON.stringify(userloged));
                    flash('done_','votre conexion et valid',true)
                    window.location="/"
                }else{
                flash('fail_',"vérifier vous information",true) 
                }
            })
            .catch(err =>{
                flash('fail_',"il y'a un erreur esseyer plus tard",true)
            })
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
                    {this.state.issent ? 
                        <div className="ffr_ld big-hg">
                            <div>
                                <Load/>
                            </div> 
                        </div>
                    : ''  }
                    <div class="_ttl_cnt">
                        <h1>Conecter vous</h1>
                    </div>
                    <div class="_all_optn">
                        <form class="_frm_ss" noValidate onSubmit={(e) => this.onSubmit(e)} autocomplete="off" >
                            <div class="_blc_frm frm_login">
                                <input type="text" id="user_insc" value={this.state.email} onChange={this.onChange} class="_identf" name="email" autocomplete="off" required />
                                <label for="user_insc">Email ou nemuro d'insecription</label>
                            </div>
                            <div class="_blc_frm frm_login">
                                <input type="password" id="mtpss" name="motpass" class="_motpass" value={this.state.motpass} onChange={this.onChange} autocomplete="off" required/>
                                <label for="mtpss">Mot de pass</label>
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