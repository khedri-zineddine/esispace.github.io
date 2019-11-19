import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import AddEtudiant from './AddEtudiant';
class BarMessage extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           pgblocks: [
              { link: "/inbox", imgsrc: 'img/box.png', text: 'Boite de réception'},
              { link: "/sent", imgsrc: 'img/email.png', text: 'Messages envoyés'}
           ]
        }
    }
    testajax(){
        $.post('http://localhost:8000/api/test',{d:'sd'})
        .done(function(data){
            alert(data)
        })
        .fail(function(data){
            alert('d')
        })
    }
    renderDataPgae() {
        return this.state.pgblocks.map((pgblock, index) => {
           const { link, imgsrc, text } = pgblock //destructuring
           return (
            
            <div className="_page_block">
                <div className="_dthov">
                <Link className="_page_link" to={link}>
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
                    {this.renderDataPgae()}
                </div>
                <div class="test-ss" onClick={this.testajax}>dsdsds</div>
            </div>
            
        )
     }
}
export default BarMessage;