import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Inbox extends Component{
     render() {
        return (
            <div class="cour_msg_recv">
                <div class="_ttlttl">
                    <span class="_btn" id="ttltl">Boite de réception</span>
                </div>
                <div class="_descrinf">
                    <div class="_ttllst _toblc">
                        <h1>Boite de réception</h1>
                        <span class="udub-slant"><span></span></span>
                    </div>
                    <div class="_nbttlmsg">
                        <span class="">nombre de message : </span>
                    </div>
                    <div class="_blcmsgnv">
                        <span class="_btn">nouveau message</span>
                    </div>
                </div>
                <div class="_cntnt_msg" msg-data="0">
                    <div class="_____cormsg">
                        dskj <br></br><br></br><br></br>
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
export default Inbox;