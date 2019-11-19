import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SignEtudiant from './SignEtudiant';
class AddEtudiant extends Component{
     render() {
        return (
            <div class="cour_iscrp">
          <div class="_ttlttl">
              <span class="_btn" id="ttltl">inscription des étudiants</span>
          </div>
          <div class="_insclist">
              <div class="_descrinf">
                  <div class="_ttllst">
                      <h1>inscrir les étudiants depuis un fichier excel</h1>
                      <span class="udub-slant"><span></span></span>
                  </div>
                  <div class="_dwnmdl">
                      <span>Télécharger le modèle de fichier excel</span><br></br>
                      <a class="_dwnl _btn" href="FileModel\model_inscreption.xlsx">télécharger</a>
                  </div>
              </div>
              <div class="_ctninf">
                  <div class="_frm_impt">
                      <form method="post" id="exel">
                          <div class="_blckinpt">
                              <input type="file" name="exel_file" id="exel_file" accept=".xlsx,.xls"/>
                              <label for="exel_file" class="_btn" id="lblexl">importer votre fichier</label>
                          </div>
                          <div class="_show_name"></div>
                      </form>
                  </div>
                  <div class="_inslst">
                      <div class="_rsltxlsx">
                          <div class="table-responsive tblauto">
                              <span class="_flchnul">Aucun fichier importé</span>
                          </div>
                      </div>
                      <div class="_insone"></div>
                  </div>
              </div>
          </div>
          <div class="_separe"></div>
          <div class="_inscun">
              <div class="_descrinf">
                  <div class="_ttllst">
                      <h1>inscrir les étudiants manuelement</h1>
                      <span class="udub-slant"><span></span></span>
                      <div class="_dwnmdl">
                          <span><span>Remarque :</span>
                          <ul>
                              <li>L'adresse email se génere selon le nom et le prenom de l'étudiant plus [@esi-space.dz]</li>
                              <li>Le mot de passe et le même que le numéro d'inscription</li>
                          </ul>
                          </span>
                      </div>
                  </div>
              </div>
              <div class="_ctninf">
                  <div>
                      <span class="_btn" id="lblexl1">formulaire d'inscription</span>
                  </div>
                  <div class="_rsltxlsx _sppd ">
                      <SignEtudiant/>
                  </div>
                  
              </div>
          </div>
        </div>
            
        )
     }
}
export default AddEtudiant;