import React, { Component } from 'react';
import $ from 'jquery';
import {flash} from './UserFunction';
import Load from './../load.js';
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
export default class SignEtudiant extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           enscretud: [
              { name1:'Nom', name2: 'Prenom',type1:'text',type2:'text'},
              { name1:'Lieu de Naissance', name2:'Email',type1:'text',type2:'email'},
              { name1:'Date de Naissance',name2:'Groupe',type1:'date',type2:'text'},
              { name1:'section',name2:'annee',type1:'text',type2:'text'}
           ],
           issent:false
        }
    }
    Getemail(email){
        if(email=='Nom' || email=='Prenom'){
            var email='space_'+$('#Prenom').val()[0]+'.'+$('#Nom').val()+'@esi.dz';
            $('#Email').val(email)
        }
    }
    
    onSubmit(e){
        e.preventDefault()
        this.setState({
            issent:true
        })
        const etudiant = {
            nom:$('#Nom').val(),
            prenom:$('#Prenom').val(),
            email_etud:$('#Email').val(),
            date_ns:$('.Date').val(),
            lieu_ns:$('.Lieu').val(),
            groupe:$('#Groupe').val(),
            annee:$('#annee').val(),
            section:$('#section').val()
        }
        if(session){
            flash('alaways_',"l'inscription de l'etudiant est en cours ...",false)
            $.post('http://127.0.0.1:8000/api/etudiant/add',{
                email:session.email,
                motpass:session.motpass,
                nom:etudiant.nom,
                prenom:etudiant.prenom,
                email_etud:etudiant.email_etud,
                date_ns:etudiant.date_ns,
                lieu_ns:etudiant.lieu_ns,
                groupe:etudiant.groupe,
                annee:etudiant.annee,
                section:etudiant.section
            })
            .done(res=>{
                flash('done_',"l'etudiant et bien inscrir",true)
                this.setState({
                    issent:false
                })
                $('.etudiantinscr')[0].reset();
            })
            .fail(err=>{
                flash('fail_',"il y'a un erreur de conexion",true)
            })
        }
    }
    renderblcline() {
        return this.state.enscretud.map((pgdrl,ind) => {
            const {name1,name2,type1,type2}=pgdrl
            return(
                <div class="___blcline">
                    <div class="___clnblc">
                        <div class="_blc_frm _secndelem">
                            <input type={type1} id={name1} class={name1} name={name1} onChange={() => this.Getemail(name1)} autocomplete="off" required />
                            <label for={name1}>{name1}</label>
                        </div>
                    </div>        
                    <div class="___clnblc">
                        <div class="_blc_frm _secndelem">
                            <input type={type2} id={name2} class={name2} name={name2} onChange={() => this.Getemail(name2)} autocomplete="off" required />
                            <label for={name2}>{name2}</label>
                        </div>
                    </div>           
                </div>
            )
        })
    }
     render() {
        return (
            <form class="etudiantinscr" onSubmit={(e)=>this.onSubmit(e)}>
                {this.state.issent ? 
                    <div className="ffr_ld big-hg">
                        <div>
                            <Load/>
                        </div> 
                    </div>
                : ''  }
                {this.renderblcline()}
                <div class="_insone btn_small_cntr">
                    <input type="submit" value="Inscrir" id="cnt_to" class="_btn" name="cnt_to" required/>
                </div>
            </form>
            
        )
     }
}