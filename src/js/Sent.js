import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Sent extends Component{
     render() {
        return (
            <div class="cour_msg_recv">
                <div class="_ttlttl">
                    <span class="_btn" id="ttltl">message envoyé</span>
                </div>
                <div class="_descrinf">
                    <div class="_ttllst _toblc">
                        <h1>message envoyé</h1>
                        <span class="udub-slant"><span></span></span>
                    </div>
                    <div class="_nbttlmsg">
                        <span class="">nombre de message : </span>
                    </div>
                    <div class="_blcmsgnv">
                        <span class="_btn">nouveau message</span>
                    </div>
                </div>
                <div class="_cntnt_msg" message-data="1">
                    <div class="_____cormsg">
                    </div>
                </div>
                <div class="header-pen">
                    <div class="fltr">
                        
                    </div>
                </div>
            </div>
        )
     }
}
export default Sent;