import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class TabEtudiant extends Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           pgblocks: [
              { link: "/inbox", imgsrc: 'img/box.png', text: 'Boite de réception'},
              { link: "/sent", imgsrc: 'img/email.png', text: 'Messages envoyés'}
           ]
        }
    }
     render() {
        return (
            <table class="table">
                <tbody id="_mnltbletd">
                    <tr class="_block_load">
                        <td class="_elem_load">
                            <div class="_lngtb">numero d'inscreption</div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb">nom</div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb">prenom</div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb">date de naisence</div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb">lieu de n'aisence</div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb">groupe</div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb">annee</div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb">section</div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb">adresse email</div>
                        </td>
                    </tr>
                    <tr class="_block_load">
                        <td class="_elem_load">
                            <div class="_lngtb"></div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb"></div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb"></div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb"></div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb"></div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb"></div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb"></div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb"></div>
                        </td>
                        <td class="_elem_load">
                            <div class="_lngtb"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        )
     }
}
export default TabEtudiant;