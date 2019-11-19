import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class AddModule extends Component{
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
                <form action="addmodule.php" method="post" class="__addmodule" id="hideover">
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