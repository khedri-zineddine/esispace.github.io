import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class AddEnseignant extends Component{
     render() {
        return (
            <div class="register_container">
                <div class="_ttlttl">
                    <span class="_btn" id="ttltl">inscription des enseignants</span>
                </div>
                <div class="container_1">
                    <div class="Insc_head">
                        <div id="img_head"><img src="fonts/img/enter.png" id="img_head_zone"/>
                        </div>
                        <h1>Inscription des enseignants</h1>
                        <h2>Formulaire pour inscrir les nouveaux enseignants</h2>
                    </div>
                    <div class="colonne_1">
                        <form action="inscreption_prof.php" method="post" class="profinscr">
                            <div class="___blcline">
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="text" id="nom" class="_identf" name="nom" autocomplete="off" required />
                                        <label for="nom">Nom</label>
                                    </div>
                                </div>        
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="text" id="prenom" class="_identf" name="prenom" autocomplete="off" required />
                                        <label for="prenom">Prénom</label>
                                    </div>
                                </div>           
                            </div>
                            <div class="___blcline">
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="text" id="nesgn" class="_identf" name="nesgn" autocomplete="off" required />
                                        <label for="nesgn">N° d'enseignant</label>
                                    </div>
                                </div>        
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="email" id="email" class="_identf __email_prof" name="email" autocomplete="off" required />
                                        <label for="email">Email</label>
                                    </div>
                                </div>           
                            </div>
                            <div class="___blcline">
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="text" id="grade" class="_identf" name="grade" autocomplete="off" required />
                                        <label for="grade">Grade</label>
                                    </div>
                                </div>        
                                <div class="___clnblc">
                                    <div class="_blc_frm _secndelem">
                                        <input type="date" id="datens" name="datens" class="_motpass" autocomplete="off" required/>
                                        <label for="datens" class="__semivalid" >Date de naissance</label>
                                    </div>
                                </div>           
                            </div>
                            <div class="___blcline">
                                <div class="___clnblc">
                                        <div class="_blc_frm _secndelem">
                                            <input type="date" id="daterec" name="daterec" class="_motpass" autocomplete="off" required/>
                                            <label for="daterec" class="__semivalid" >Date de recrutement</label>
                                        </div>
                                    </div>                        
                            </div>
                            <div class="__infocns"><b>! le mot de passe et le même que le numéro d'enseignant</b></div>
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