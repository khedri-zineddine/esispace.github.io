import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class AfficheNote extends Component{
     render() {
        return (
            <div class="cour_affiche_not">
            <div class="_ttlttl">
                <span class="_btn" id="ttltl">affichage des notes</span>
            </div>
            <div class="_inscun">
                    <div class="_descrinf">
                            <div class="_ttllst">
                                <h1>Affichage des notes </h1>
                                <span class="udub-slant"><span></span></span>
                            </div>
                            <div class="__prcafiche">
                                <h1 class="_4ebz">ِComment afficher les notes</h1>
                                <div class="_4eb-">
                                    <div class="_dwnmdl">
                                        <ul class="_indecation">
                                            <li>Télécharger la liste des etudiant dans un fichier excel de l'annee pour remplir les notes</li>
                                            <li>transferer le fichier excel qui contient les note et faire l'affichage</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_ctninf">
                            <div class="Insc_head" >
                                <h1>Nouveau Affichage des Notes</h1>
                            </div>
                            <div class="crcntnt">
                                <div class="__getlist">
                                    <div class="crgetlst">
                                        <div class="___ttgetlst">
                                            <h2 class="_4ebz">Obtenir la liste des etudiant</h2>
                                            <div class="descrb">dans cette etap vous devis selectioner l'annee et l'examen ou td qui tu vous l'afficher pour obtenir la liste des etudiant et le remplit les note (le fichier et excel ) </div>
                                            <button class="__strgetlst _btn">Commencer</button>
                                        </div>        
                                    </div>
                                </div>
                                <hr class="__sipver"/>
                                <div class="__affliste">
                                    <div class="craflst">
                                        <div class="____ttafchlst">
                                            <h2 class="_4ebz">Afficher les notes qui vous avez déja remplit</h2>
                                            <div class="descrb">Selection le module concernent l'affichage et les note de quelle emd ou td et finalement selectioner le fichier excel qui vous avez </div>
                                            <button class="__strafftlst _btn">Commencer</button>
                                        </div>    
                                    </div>
                                </div>
                            </div> 
                            <div class="_btnhideelem ___upcntrlaff">
                                <img src="/img/right-arrow.png"/>
                            </div>
                            <hr class="_separe _sptop-"/>
                            <div class="crlstaffch">
                            <div class="Insc_head">
                                <h1>Liste des affichage des notes</h1>
                            </div>
                            <div class="__listaffch-">
                               
                            </div>
                            </div>
                        </div>
            </div>
        </div>

        )
     }
}
export default AfficheNote;