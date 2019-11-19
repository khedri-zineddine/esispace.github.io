import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
export default class SignEtudiant extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           enscretud: [
              { name1:'Nom', name2: 'Prénom',type1:'text',type2:'text'},
              { name1:"N° d'inscription", name2:'Email',type1:'text',type2:'email'},
              { name1:'Lieu de Naissance', name2:'Date de Naissance',type1:'text',type2:'date'},
              { name1:'Groupe', name2:'section',type1:'text',type2:'text'}
           ]
        }
    }
    renderblcline() {
        return this.state.enscretud.map((pgdrl,ind) => {
            const {name1,name2,type1,type2}=pgdrl
            return(
                <div class="___blcline">
                    <div class="___clnblc">
                        <div class="_blc_frm _secndelem">
                            <input type={type1} id={name1}  name={name1} autocomplete="off" required />
                            <label for={name1}>{name1}</label>
                        </div>
                    </div>        
                    <div class="___clnblc">
                        <div class="_blc_frm _secndelem">
                            <input type={type2} id={name2}  name={name2} autocomplete="off" required />
                            <label for={name2}>{name2}</label>
                        </div>
                    </div>           
                </div>
            )
        })
    }
     render() {
        return (
            <form action="inscreption_etudiant.php" method="post" class="etudiantinscr">
                {this.renderblcline()}
                <div class="___blcline">
                    <div class="___clnblc">
                        <div class="_blc_frm _secndelem">
                            <input type="text" id="ann" name="ann"  autocomplete="off" required/>
                            <label for="ann" >Année</label>
                        </div>
                    </div>                       
                </div>
                <div class="_insone btn_small_cntr">
                    <input type="submit" value="Inscrir" id="cnt_to" class="_btn" name="cnt_to" required/>
                </div>
            </form>
            
        )
     }
}
if (document.getElementById('signetudiant')) {
    ReactDOM.render(<SignEtudiant />, document.getElementById('signetudiant'));
}