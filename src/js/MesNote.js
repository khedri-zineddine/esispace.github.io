import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import axios from 'axios'
import {flash} from './UserFunction'
import Load from './../load.js';
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
class MesNote extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           smstr1:this.getNote(),
           smstr2:null
        }
    }
    getNote(){
        flash('alaways_','chargement des notes et en cours ...',false)
        axios 
        .post('http://127.0.0.1:8000/api/etudiant/mesnote',{
            email:session.email,
            motpass:session.motpass
        })
        .then(res=>{
            this.setState({
                smstr1:ReactHtmlParser(res.data.data[0]),
                smstr2:ReactHtmlParser(res.data.data[1])
            })
            flash('done_','vous notes et bien charger',true)
        })
        .catch(err=>{
            flash('fail_','il y a un erreur esseyer plus tard',true)
        })
    }
     render() {
         {this.getNote()}
        return (
            <div class="cour_mes_note">
            <div class="_ttlttl">
                <span class="_btn" id="ttltl">Mes Notes</span>
            </div>
            <div class="_insclist">
                <div class="_descrinf">
                    <div class="_ttllst">
                        <h1>Mes notes l'année scolaire :</h1>
                        <span class="udub-slant"><span></span></span>
                    </div>
                </div>
                <div class="_ctninf">
                    <div class="_ttelmnt" >
                        <div class="_cours_elemnt">
                            <div class="_elmncrnt _elmntactv _cnhdsh">
                                    <div class="_crthisc">                      
                                        <div class="_crthisc _elmntgrp">
                                            <div class="_ttllst _blcelmntshw">
                                                    <h2>LA TABLE DES NOTES DE 1ER SEMESTRE</h2>
                                                    <p>Les notes à classer par chaque module si vous voulez consultez la note appuie sur consulter</p>
                                            </div>
                                        </div>
                                    </div>
                                <div class="table-responsive" >
                                    <table class="table">
                                        <tbody id="_mnltbletd" id="1smstr">
                                            <tr class="_block_load">
                                                <td class="_elem_load">
                                                    <div class="_lngtb">MODULE</div>
                                                </td>
                                                <td class="_elem_load" colspan="2">
                                                    <div class="_lngtb" >CI</div>
                                                </td>
                                                <td class="_elem_load" colspan="2">
                                                    <div class="_lngtb">Cntrl_final</div>
                                                </td>
                                                <td class="_elem_load">
                                                    <div class="_lngtb">TD</div>
                                                </td>
                                                <td class="_elem_load">
                                                    <div class="_lngtb">COEF</div>
                                                </td>
                                            </tr>
                                            {this.state.smstr1 ? this.state.smstr1
                                            : '' }
                                        </tbody>
                                    </table>
                                    {this.state.smstr1 ? ''
                                    : <Load/> }
                                </div>
                            </div>
                            <div class="_btnhideelem __up-notes">
                                <img src="/img/right-arrow.png"/>
                            </div>
                            <hr class="_separe"/>
                            <div class="_elmncrnt _elmntactv ">
                                <div class="_crthisc">                      
                                    <div class="_crthisc _elmntgrp">
                                        <div class="_ttllst _blcelmntshw">
                                            <h2>LA TABLE DES NOTES DE 2eme SEMESTRE</h2>
                                            <p>Les notes à classer par chaque module si vous voulez consultez la note appuie sur consulter</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive" >
                                    <table class="table">
                                        <tbody id="_mnltbletd" id="2smstr">
                                            <tr class="_block_load">
                                                <td class="_elem_load">
                                                    <div class="_lngtb">MODULE</div>
                                                </td>
                                                <td class="_elem_load" colspan="2">
                                                    <div class="_lngtb" >CI</div>
                                                </td>
                                                <td class="_elem_load" colspan="2">
                                                    <div class="_lngtb">Cntrl_final</div>
                                                </td>
                                                <td class="_elem_load">
                                                    <div class="_lngtb">TD</div>
                                                </td>
                                                <td class="_elem_load">
                                                    <div class="_lngtb">COEF</div>
                                                </td>
                                            </tr>
                                            
                                            {this.state.smstr2 ? this.state.smstr2
                                            : '' }
                                        </tbody>
                                    </table>
                                    {this.state.smstr2 ? ''
                                    : <Load/> }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        )
     }
}
export default MesNote;