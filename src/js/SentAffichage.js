import React, { Component } from 'react';
import $ from 'jquery';
import { saveAs } from 'file-saver';
import XLSX from 'xlsx';
import {Link} from "react-router-dom";
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
class SentAffichage extends Component{
    
     render() {
        return (
            <div class="cnfrmdl">
<form action="" class="frmaffchlst"> 
    <div class="__chinfls toshw-">
        <h2 class="_4ebz">Affichage des note au etudiants</h2>
        <div class="__crfinflstcr">
                <div class="blcslctfrm">
                    <label>choiser le module</label>
                    <select name="module" class="__stselectop" id="">
                        <option value="">Aucune selectioner</option>
                        
                    </select>
                </div>
                <div class="blcslctfrm">
                <label for="_upexcelfl" class="_btn  up_-">parcourer</label>
                <input type="file" name="__lstnot"  id="_upexcelfl" class="hdint-" accept=".xlsx,.xls"/>
                </div>
        </div>
        <div class="__btncntnt">
            <Link to="/affichage" class="_btn __consultnt ___anlelemlst">annuler</Link>
            <button class="_btn _btn_info __consultnt __suivntelem">Confirmer</button>
        </div>
    </div>
</form>
            </div>
        )
     }
}
export default SentAffichage;