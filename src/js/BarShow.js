import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BarMessage from './OptionUser';
import $ from 'jquery';
class BarShow extends Component{
    showbar(){
        if(!$('.list_barre_profil.__act__lst').html()){
            $('.list_barre_profil').addClass('__act__lst')
        }else{
            $('.list_barre_profil').removeClass('__act__lst')
        }
    }
     render() {
        return (
            <div>
                <div class="BU_show">
                    <div class="img_profile">
                        <img class="img/img_profile_user"  />
                    </div>
                    <div class="name_user">
                        <span>sfdghf</span>
                        <span class="click_show" onClick={this.showbar} > 
                            <img src="img/click_logo.png"/>  
                        </span>
                    </div>
                </div>
                <div class="list_barre_profil" id="show_list_bar">
                <BarMessage/>
                </div>
            </div>
        )
     }
}
export default BarShow;