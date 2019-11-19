import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class NavAdmin extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           adminpgs: [
              { imgsrc: 'img/man-user.png', text: 'Gestion des étudiants',drl:[
                    {link: "/etudiant/show", imgsrc: 'img/liste.png', text: 'Liste étudiants'},
                    {link: "/etudiant/add", imgsrc: 'img/inscreption.png', text: 'Inscréption'}
                ]
              },
              { imgsrc: 'img/manager.png', text: 'Gestion des enseig...',drl:[
                    {link: "/enseignant/show", imgsrc: 'img/liste.png', text: 'Liste enseignant'},
                    {link: "/enseignant/add", imgsrc: 'img/inscreption.png', text: 'Inscreption'}
                ]
               },
               { imgsrc: 'img/content.png', text: 'Gestion des modules',drl:[
                    {link: "/module/add", imgsrc: 'img/add.png', text: 'ajouter module'}
                ]
               }
           ]
        }
    }
    renderdrl(elem) {
        return elem.map((pgdrl,ind) => {
            const {link,imgsrc,text}=pgdrl
            return(
                <div className="_blk_drl">
                    <Link className="_page_link_derol" title={text} to={link}>
                        <div className="_icon_page">
                            <img className="_icon" alt="" src={imgsrc} title="" />
                        </div>
                        <span>{text}</span>
                    </Link>
                </div>
            )
        })
    }
    drlslist(index) {
        if(!$('._page_bloc_drl').eq(index).find('.active_derol').html()){
            $('._lst_drl').removeClass('active_derol')
            $('.flch_ct').removeAttr('style')
            $('._page_bloc_drl').eq(index).find('._lst_drl').addClass('active_derol');
            $('._page_bloc_drl').eq(index).find('.flch_ct').css({
                'transform':'rotate(0deg)'
            })
        } else{
            $('._page_bloc_drl').eq(index).find('.flch_ct').removeAttr('style')
            $('._page_bloc_drl').eq(index).find('._lst_drl').removeClass('active_derol');
        } 
    }
    renderDataPgae() {
        return this.state.adminpgs.map((adminpg, index) => {
           const { imgsrc, text,drl} = adminpg //destructuring
           return (
                <div className="_page_block _page_bloc_drl">
                    <div className="_dthov" onClick={() => this.drlslist(index)}>
                        <span className="flch_ct"><img src="img/right-arrow.png" /></span>
                        <a className="_page_link" title={text}>
                            <div className="_icon_page">
                                <img className="_icon" alt="" src={imgsrc} title="" />
                            </div>
                            <span>{text}</span>
                        </a>
                    </div>
                    <div className="_lst_drl">
                        <div className="_elm_derol">
                            {this.renderdrl(drl)} 
                        </div>
                    </div>
                </div>
           )
        })
     }
     render() {
        return (
            <div classs="_elem_block">
                <div class="_list_block_number">
                    {this.renderDataPgae()}
                </div>
            </div>
            
        )
     }
}
export default  NavAdmin;
