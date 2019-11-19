import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TabEtudiant from './TabEtudiant';
class ShowEtudiant extends Component{
     render() {
        return (
            <div class="cour_lister_etudiant">
                <div class="_ttlttl">
                    <span class="_btn" id="ttltl">listes des etudiants</span>
                </div>
                <div class="_insclist">
                    <div class="_descrinf">
                        <div class="_ttllst">
                            <h1>liste des etudiants</h1>
                            <span class="udub-slant"><span></span></span>
                        </div>
                    </div>
                    <div class="_ctninf">
                        <div class="_ttelmnt">
                            <div class="_elmnt_select">
                                <ul class="nav nav-tabs" id="nav_tabs">
                                    <li role="presentation" class="_cselmnt"><a >tous les etudiants</a></li>
                                </ul>
                            </div>
                            <div class="_cours_elemnt">
                                <div class="_elmncrnt _elmntactv">
                                    <div class="_crthisc">
                                        <div class="_ttllst _crtrelmnt">
                                            <h1>liste de tous les étudiants de l'école</h1>
                                            <span class="udub-slant"><span></span></span>
                                        </div>
                                        <hr class="_separe"/>
                                        <div class="_crthisc _elmntgrp">
                                            <div class="_getelemAll _getelem" >
                                                <button class="_btn __showetdi" id="__partt">afficher</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive _vrtltble">
                                        <TabEtudiant/>
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
export default ShowEtudiant;