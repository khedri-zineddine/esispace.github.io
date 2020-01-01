import React, { Component } from 'react';
import $ from 'jquery'
import axios from 'axios';
import Load from './../load.js';
import {
    Link
  } from "react-router-dom";
import {flash,getback} from './UserFunction'
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
var listfile=[]
function postfile(data){
    flash('alaways_','votre fichier en cours de transfert ...',false)
    $.ajax({
        url: '/api/message/movfile', // the url where we want to POST
        data: data, // our data object
        method: 'POST',
        // define the type of HTTP verb we want to use (POST for our form)
        processData: false,
        contentType: false
    })
    .done(res => {
        var add_it=[res.data.chemain,res.data.name_img]
        listfile.push(add_it);
        var word = res.data.name_img.split('.');
        var extenfil = word[word.length - 1];
        var extn = ['jpg', 'png', 'jpeg'];
        if($.inArray(extenfil, extn) != -1){
            $('.___img').append('<div class="_imgselct __to_delete"><img src="' + res.data.chemain + '" alt="' + res.data.name_img + '" class=""><div class="_supimgslc _spimg" index_file="'+listfile.indexOf(add_it)+'"><span></span><span></span></div></div>');
        }else{
            $('.___doc').append('<div class="_fleblcdwnld __to_delete"><img src="/img/' + extenfil + '.png" alt=""><div class="_ssflp"><div class="_frsspan" fileaddresse="' + res.data.chemain + '"><div>' + res.data.name_img + '</div></div></div><div index_file="'+listfile.indexOf(add_it)+'" class="_supimgslc _spdoc"><span></span><span></span></div></div>');
        }
        flash('done_','votre fichier et bien transferer',true)
        $('._supimgslc').click(function(){
            var index=parseInt($(this).attr('index_file'))
            listfile.splice(index, 1);
            $(this).parent('.__to_delete').remove();
        })
    })
    .fail(err=>{
        flash('fail_','fichier no transferer',true)
        console.log(err)
    })
}
class ReduMessage extends Component {
    constructor(props){
        super(props);
        this.state = { //state is by default an object
            issent:false
         }
     }
    FocusWrite(){
        $('._inptmsgenv').css({
            'opacity':'1'
        })
        if($('._inptmsgenv').html()=="Taper votre message"){
            $('._inptmsgenv').html('') 
        }
    }
    BlurWrite(){
        if($('._inptmsgenv').html()==""){
            $('._inptmsgenv').removeAttr('style')
            $('._inptmsgenv').html('Taper votre message') 
        }
    }
    moveImg(e){
        /*var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function() {
            var fileContent = reader.result;
            postfile(fileContent)
        }*/
       var formData = new FormData($("._elmfrmimg")[0])
       postfile(formData)
        
    }
    movDoc(){
        var formData = new FormData($("._elmfrmdoc")[0]); 
        postfile(formData)
    }
    sentmsg(){
        this.setState({
            issent:true
        })
        flash('alaways_',"votre message en cours de l'envoi ...",false);
         axios
         .post('/api/message/sentmsg',{
             to:$('._writto').html(),
             sent:session.email,
             msg:$('._inptmsgenv').html(),
             lstfl:listfile
         })
         .then(res=>{
            this.setState({
                issent:false
            })
             if(res.data.data=="vous pouver envoyer des message que a des utilisateur de l'ecole"){
                flash('fail_',"vous pouver envoyer des message que a des utilisateur de l'ecole",true)
             }else if(res.data.data=="votre message et bien envoyer"){
                flash('done_',"votre message et bien envoyer",true)
                $('._inptmsgenv').html('Taper votre message')

             }else{
                flash('done_',"il y'a un erreur de conexion esseyer plus tard",true)
             }
         })
         .catch(err=>{
            flash('fail_',"votre message n'est pas envoyer",false)
         })
    }
    shwhid(){
        if(!$('._message_sent').attr('style')){
            $('._message_sent').css({
                'bottom':'-370px'
            })
        }else{
            $('._message_sent').removeAttr('style')
        }
    }
     render() {
        return (   
            <div>
                {this.state.issent ?
                    <div className="ffr_ld">
                        <div>
                            <Load/>
                        </div> 
                    </div>
                    : ''
                }
                
                <div class="_cntrlbtmsg" onClick={this.shwhid}>
                    <div class="_nmmsg">
                        <span>Nouveau Message</span>
                    </div>
                </div>
                <div class="_senttomsg">
                    <span>A:</span>
                    <span class="_writto"  id="__inpttosent" contenteditable="true">

                    </span>
                </div>
                <div class="_cntallimg">
                    <div class="___img">

                    </div>
                    <div class="___doc">

                    </div>

                </div>
                <div class="_inptwrite">
                    <div class="_extwrite" >
                        <span class="_inptmsgenv" onFocus={this.FocusWrite} onBlur={this.BlurWrite} contenteditable="true">Taper votre message</span>
                    </div>
                    <div class="_elmeaddmsg">
                        <div class="_elmfrm">
                            <div class="__blcsent">
                                <form class="_elmfrmimg" method="post" enctype="multipart/form-data">
                                    <div class="_fil_">
                                        <label for="addimage" class="">
                                            <img src="/img/addimage.png" alt=""/> 
                                        </label>
                                    </div>
                                    <input type="file" name="addimage" id="addimage" onChange={(e) => this.moveImg(e)} class="_nwimage" accept=".jpg,.png,.jpeg"/>
                                    
                                </form>
                            </div>
                            <div class="__blcsent">
                                <form class="_elmfrmdoc" method="post" enctype="multipart/form-data">
                                    <div class="_fil_">
                                        <label for="adddocm" class="">
                                            <img src="/img/adddoc.png" alt="" class=""/>
                                        </label>
                                    </div>
                                    <input type="file" id="adddocm" class="_nwimage" onChange={this.movDoc} name="addimage"/>
                                </form>
                            </div>
                        </div>
                        <div class="_nmflup">
                        </div>
                        <div class="_cnfsent" onClick={() => this.sentmsg()}>
                            <img src="/img/email.png" alt="" class=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
     }
}
export default ReduMessage;