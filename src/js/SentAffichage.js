import React, { Component } from 'react';
import $ from 'jquery';
import { saveAs } from 'file-saver';
import axios from 'axios'
import XLSX from 'xlsx';
import {Link} from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
var dataetudjson;
function excel_to_json(e){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function() {
        var fileContent = reader.result;
        var url = fileContent;
        var oReq = new XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";

        oReq.onload = function(e) {
        var arraybuffer = oReq.response;

        /* convert data to binary string */
        var data = new Uint8Array(arraybuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        /* Call XLSX */
        var workbook = XLSX.read(bstr, {
            type: "binary"
        });

        /* DO SOMETHING WITH workbook HERE */
        var first_sheet_name = workbook.SheetNames[0];
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];
        dataetudjson = XLSX.utils.sheet_to_json(worksheet)
    }
    oReq.send();
    }
}
class SentAffichage extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           modules: <option>sqqds</option>
        }
    }
    getModule(){
        axios
        .get("http://127.0.0.1:8000/api/module/getmodule")
        .then(res=>{
            console.log(res.data)
            $('#__modul').append(res.data.data)
        });
        
    }
    cnfrmsent(e){
        e.preventDefault()
        console.log(dataetudjson)
        alert($('#__modul').val())
        var notexam=null;
        var exam=null;
        dataetudjson.map(note=>{
            if(note.cntrl_intr){
                notexam=note.cntrl_intr
                exam='cntrl_intr';
            }else if(note.td){
                notexam=note.td
                exam='td';
            }else if(note.cntrl_final){
                notexam=note.cntrl_final
                exam='cntrl_final';
            }
            axios 
            .post('/api/enseignent/addnote',{
                email:session.email,
                motpass:session.motpass,
                email_etud:note.email,
                exam:exam,
                note:notexam,
                idmodule:$('#__modul').val()
            })
            .then(res=>{
                alert(res.data.data)
                console.log(res)
            })
            .catch(err=>{
                alert(err)
                console.log(err)
            })
        })
    }
     render() {
        return (
            <div class="cnfrmdl">
<form action="" class="frmaffchlst"> 
    <div class="__chinfls toshw-">
        <h2 class="_4ebz">Affichage des note au etudiants</h2>
        <div class="__crfinflstcr">
                <div class="blcslctfrm">
                    <label>choiser le module</label>
                    <select name="module" class="__stselectop" id="__modul">
                        <option value="">Aucune selectioner</option>
                        {this.getModule()}
                    </select>
                </div>
                <div class="blcslctfrm">
                <label for="_upexcelfl" class="_btn  up_-">parcourer</label>
                <input type="file" name="__lstnot"  id="_upexcelfl" class="hdint-"  onChange={(e)=> excel_to_json(e)} accept=".xlsx,.xls"/>
                </div>
        </div>
        <div class="__btncntnt">
            <Link to="/affichage" class="_btn __consultnt ___anlelemlst">annuler</Link>
            <button class="_btn _btn_info __consultnt __suivntelem" onClick={this.cnfrmsent}>Confirmer</button>
        </div>
    </div>
</form>
            </div>
        )
     }
}
export default SentAffichage;