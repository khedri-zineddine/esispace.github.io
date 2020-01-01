import React, { Component } from 'react';
import $ from 'jquery';
import {flash} from './UserFunction'
import { saveAs } from 'file-saver';
import XLSX from 'xlsx';
import Load from './../load.js';
import {Link} from "react-router-dom";
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
function table_to_excel(idtable,namefile){
    var wb = XLSX.utils.table_to_book(document.getElementById(idtable), {sheet:"Sheet JS"});
    var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});
    function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
    }
    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}),namefile);
}
class ListAffichage extends Component{
    constructor(props){
        super(props)
        this.state ={
            issent:false
        }
    }
    getexcel(){
        if(session){
            flash('alaways_','la recepuration de fichier et en cours ...',false)
            this.setState({
                issent:true
            })
            $.post('http://127.0.0.1:8000/api/enseignent/list',{
                email:session.email,
                motpass:session.motpass,
                anneafich:$('#anne_selct').val(),
                exam_afich:$('#exam_afich').val()
            })
            .done(res=>{
                $('body').append(res.data)
                table_to_excel('tbletudiant','listetudiant.xlsx')
                this.setState({
                    issent:false
                })
                flash('done_','votre fichier et pret,1s et sera telecharger',true)
            })
            .fail(function(err){
                flash('fail_',"il y'a un erreur esseyer plus tard",true)
            })
        }
    }
     render() {
        return (
            <div class="cnfrmdl">
                <div class="__chinfls toshw-">
                    {this.state.issent ? 
                        <div className="ffr_ld big-hg sml-wd">
                            <div>
                                <Load/>
                            </div> 
                        </div>
                    : ''  }
                    <h2 class="_4ebz">Génerer la liste des etudiant</h2>
                    <div class="__crfinflstcr">
                        <form action="" class="2optlzct">
                            <div class="blcslctfrm">
                                <label>choiser l'annee</label>
                                <select name="annee" class="__stselectop" id="anne_selct">
                                    <option value="">Aucune selectioner</option>
                                    <option value="1">1 cpi</option>
                                    <option value="2">2 cpi</option>
                                    <option value="3">1 cs</option>
                                    <option value="4">2 cs</option>
                                    <option value="5">3 cs</option>
                                </select>
                            </div>
                            <div class="blcslctfrm">
                                <label>choiser l'examen</label>
                                <select name="typeaffichage" class="__stselectop" id="exam_afich">
                                    <option value="">Aucune selectioner</option>
                                    <option value="cntrl_intr">ci</option>
                                    <option value="cntrl_final">examen finale</option>
                                    <option value="td">td</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="__btncntnt">
                        <Link to="/affichage" class="_btn __consultnt ___anlelemlst">annuler</Link>
                        <button class="_btn _btn_info __consultnt __getlistetud" onClick={()=>this.getexcel()}>obtenir la list</button>
                    </div>
                </div>
            </div>
            
        )
     }
}
export default ListAffichage;