import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class NavEnseignant extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           enspgs: [
              { link:'/affichage', imgsrc: '/img/note.png', text: 'Affihage des notes'
              } 
           ]
        }
    }
    renderpageblock() {
        return this.state.enspgs.map((pgdrl,ind) => {
            const {link,imgsrc,text}=pgdrl
            return(
                <div class="_page_block">
                    <div class="_dthov">
                        <Link className="_page_link" title={text} to={link}>
                            <div className="_icon_page">
                                <img className="_icon" alt="" src={imgsrc} title="" />
                            </div>
                            <span>{text}</span>
                        </Link>
                    </div>
                </div>
            )
        })
    }
     render() {
        return (
            <div classs="_elem_block">
                <div class="_list_block_number">
                    {this.renderpageblock()}
                </div>
            </div>
            
        )
     }
}
if (document.getElementById('navenseignant')) {
    ReactDOM.render(<NavEnseignant />, document.getElementById('navenseignant'));
}