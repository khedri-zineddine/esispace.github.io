import React, { Component } from 'react';
import $ from 'jquery'
import {flash} from './UserFunction';
import Load from './../load.js';
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
class AddEnseignant extends Component{
    constructor(props) {
        super(props)
        this.state = { 
           issent:false
        }
    }
    Getemail(email){
        var email='space_'+$('#prenom').val()[0]+'.'+$('#nom').val()+'@esi.dz';
        $('#email').val(email)
    }
    onSubmit(e){
        e.preventDefault()
        this.setState({
            issent:true
        })
        const enseignant = {
            nom:$('#nom').val(),
            prenom:$('#prenom').val(),
            email_etud:$('#email').val(),
            date_ns:$('#datens').val(),
            date_recrt:$('#daterec').val(),
            grade:$('#grade').val()
        }
        if(session){
            flash('alaways_',"l'inscription de l'ensiegnant est en cours ...",false)
            $.post('http://127.0.0.1:8000/api/enseignent/add',{
                email:session.email,
                motpass:session.motpass,
                nom:enseignant.nom,
                prenom:enseignant.prenom,
                email_ens:enseignant.email_etud,
                date_ns:enseignant.date_ns,
                date_recrt:enseignant.date_recrt,
                grade:enseignant.grade
            })
            .done(res=>{
                flash('done_',"l'ensiegnant et bien inscrir",true)
                this.setState({
                    issent:false
                })
                $('.profinscr')[0].reset();
            })
            .fail(function(err){
                flash('fail_',"il y'a un erreur de conexion",true)
            })
        }
    }
     render() {
        return (
            <div class="register_container">
                <div class="_ttlttl">
                    <span class="_btn" id="ttltl">inscription des enseignants</span>
                </div>
                <div class="container_1">
                    <div class="Insc_head">
                        <h1>Inscription des enseignants</h1>
                        <h2>Formulaire pour inscrir les nouveaux enseignants</h2>
                    </div>
                    <div class="colonne_1">
                        <form   class="profinscr" onSubmit={(e)=>this.onSubmit(e)}>
                            {this.state.issent ? 
                                <div className="ffr_ld big-hg">
                                    <div>
                                        <Load/>
                                    </div> 
                                </div>
                            : ''  }
                            <div class="___blcline">
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="text" id="nom" class="_identf" name="nom" onChange={this.Getemail} autocomplete="off" required />
                                        <label for="nom">Nom</label>
                                    </div>
                                </div>        
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="text" id="prenom" class="_identf" name="prenom" onChange={this.Getemail} autocomplete="off" required />
                                        <label for="prenom">Prénom</label>
                                    </div>
                                </div>           
                            </div>
                            <div class="___blcline">  
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="email" id="email" class="_identf __email_prof" name="email" autocomplete="off" required />
                                        <label for="email">Email</label>
                                    </div>
                                </div>   
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="text" id="grade" class="_identf" name="grade" autocomplete="off" required />
                                        <label for="grade">Grade</label>
                                    </div>
                                </div>         
                            </div>
                            <div class="___blcline">       
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="date" id="datens" name="datens" class="_motpass" autocomplete="off" required/>
                                        <label for="datens" class="__semivalid" >Date de naissance</label>
                                    </div>
                                </div> 
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="date" id="daterec" name="daterec" class="_motpass" autocomplete="off" required/>
                                        <label for="daterec" class="__semivalid" >Date de recrutement</label>
                                    </div>
                                </div>           
                            </div>
                            <div class="__infocns"><b>! le mot de passe et le même que le email</b></div>
                            <div class="_blc_frm btn_small_cntr">
                                <input type="submit" value="Inscrir" id="cnt_to" class="cnt_ct" name="cnt_to" required/>
                            </div>
                        </form>
                    </div>
                </div>  
            </div>
            
        )
     }
}
export default AddEnseignant;