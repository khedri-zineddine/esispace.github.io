import React, { Component } from 'react';
import $ from 'jquery'
import {flash} from './UserFunction';
import Load from './../load.js';
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
class AddModule extends Component{
    constructor(props) {
        super(props)
        this.state = { 
           issent:false
        }
    }
    onSubmit(e){
        e.preventDefault()
        this.setState({
            issent:true
        })
        const modul = {
            nommodule:$('#nmmdl').val(),
            coff:$('#coff').val(),
            annee:$('#andmdl').val(),
            semestre:$('#smdmdl').val()
        }
        if(session){
            flash('alaways_',"votre module est en cours de l'ajoute ...",false)
            $.post('http://127.0.0.1:8000/api/module/add',{
                email:session.email,
                motpass:session.motpass,
                nommodule:modul.nommodule,
                coff:modul.coff,
                annee:modul.annee,
                semestre:modul.semestre
            })
            .done(res=>{
                flash('done_',"le module et bien ajouter",true)
                $('.__addmodule')[0].reset();
                this.setState({
                    issent:false
                })
            })
            .fail(function(err){
                flash('fail_',"il y'a un erreur de conexion",true)
            })
        }
    }
     render() {
        return (   
<div class="cour_gd_module">
        <div class="_ttlttl">
            <span class="_btn" id="ttltl">ajouter des modules</span>
        </div>
    <div class="_inscun">
        <div class="_descrinf">
            <div class="_ttllst">
                <h1>ajouter un module </h1>
                <span class="udub-slant"><span></span></span>
            </div>
        </div>
        <div class="_ctninf">
            <div class="Insc_head">
                <h1>Création des modules</h1>
            </div>
            
        <div class="Insc_head">
        <h2>Formulaire pour ajouter un module</h2>
        </div>
            <div class="_rsltxlsx _sppd " >
                <form onSubmit={(e)=>this.onSubmit(e)}  class="__addmodule" id="hideover">
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
                                <input type="text" id="nmmdl"  name="nmmdl" autocomplete="off" required />
                                <label for="nmmdl">Nom</label>
                            </div>
                        </div>        
                        <div class="___clnblc">
                            <div class="_blc_frm _secndelem">
                                <input type="text" id="coff"  name="coff" autocomplete="off" required />
                                <label for="coff">Coefficient</label>
                            </div>
                        </div>           
                    </div>
                    <div class="___blcline">
                        <div class="___clnblc">
                            <div class="_blc_frm _secndelem">
                                <input type="text" id="andmdl"  name="andmdl" autocomplete="off" required />
                                <label for="andmdl">Année</label>
                            </div>
                        </div>        
                        <div class="___clnblc">
                            <div class="_blc_frm _secndelem">
                                <input type="text" id="smdmdl" class="__email_prof" name="smdmdl" autocomplete="off" required />
                                <label for="smdmdl">Semestre</label>
                            </div>
                        </div>           
                    </div>
                        <div class="_insone _btn_smll__">
                            <input type="submit" value="Ajouter le module" id="cnt_to" class="_btn" name="cnt_to" required />
                        </div>
                </form>
            </div>
            
        </div>
        
    </div>
</div>
        )
     }
}
export default AddModule;