import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class MesNote extends Component{
     render() {
        return (
            <div class="cour_mes_note">
            <div class="_ttlttl">
                <span class="_btn" id="ttltl">Mes Notes</span>
            </div>
            <div class="_insclist">
                <div class="_descrinf">
                    <div class="_ttllst">
                        <h1>Mes notes l'année scolaire :</h1>
                        <span class="udub-slant"><span></span></span>
                    </div>
                </div>
                <div class="_ctninf">
                    <div class="_ttelmnt" >
                        <div class="_cours_elemnt">
                            <div class="_elmncrnt _elmntactv _cnhdsh">
                                    <div class="_crthisc">                      
                                            <div class="_crthisc _elmntgrp">
                                                <div class="_ttllst _blcelmntshw">
                                                        <h2>LA TABLE DES NOTES DE 1ER SEMESTRE</h2>
                                                        <p>Les notes à classer par chaque module si vous voulez consultez la note appuie sur consulter</p>
                                                </div>
                                            </div>
                                         </div>
                                <div class="table-responsive" id="1smstr">
                                    <table class="table">
                                        <tbody id="_mnltbletd">
                                            <tr class="_block_load">
                                                <td class="_elem_load">
                                                    <div class="_lngtb">MODULE</div>
                                                </td>
                                                <td class="_elem_load" colspan="2">
                                                    <div class="_lngtb" >EMD1</div>
                                                </td>
                                                <td class="_elem_load" colspan="2">
                                                    <div class="_lngtb">EMD2</div>
                                                </td>
                                                <td class="_elem_load">
                                                    <div class="_lngtb">TD</div>
                                                </td>
                                                <td class="_elem_load">
                                                    <div class="_lngtb">MOYENNE</div>
                                                </td>
                                                <td class="_elem_load">
                                                    <div class="_lngtb">COEF</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="_calculmyn">
                                    <div class="__btnfrcalcul">
                                        <button type="" class="_btn __getmoyen" id="get1smstrmoyn">Calculer la moyenne</button>
                                    </div>
                                    <div class="__inptshow">
                                            <span>votre moyenne ici</span>
                                    </div>
                                </div>
                            </div>
                            <div class="_btnhideelem __up-notes">
                                <img src="/img/right-arrow.png"/>
                            </div>
                            <hr class="_separe"/>
                            <div class="_elmncrnt _elmntactv ">
                                    <div class="_crthisc">                      
                                            <div class="_crthisc _elmntgrp">
                                                <div class="_ttllst _blcelmntshw">
                                                    <h2>LA TABLE DES NOTES DE 2eme SEMESTRE</h2>
                                                    <p>Les notes à classer par chaque module si vous voulez consultez la note appuie sur consulter</p>
                                                </div>
                                            </div>
                                         </div>
                                         <div class="table-responsive" id="2smstr">
                                            <table class="table">
                                                <tbody id="_mnltbletd">
                                                    <tr class="_block_load">
                                                        <td class="_elem_load">
                                                            <div class="_lngtb">MODULE</div>
                                                        </td>
                                                        <td class="_elem_load" colspan="2">
                                                            <div class="_lngtb" >EMD1</div>
                                                        </td>
                                                        <td class="_elem_load" colspan="2">
                                                            <div class="_lngtb">EMD2</div>
                                                        </td>
                                                        <td class="_elem_load">
                                                            <div class="_lngtb">TD</div>
                                                        </td>
                                                        <td class="_elem_load">
                                                            <div class="_lngtb">MOYENNE</div>
                                                        </td>
                                                        <td class="_elem_load">
                                                            <div class="_lngtb">COEF</div>
                                                        </td>
                                                    </tr>
                                                   
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                <div class="_calculmyn">
                                        <div class="__btnfrcalcul">
                                            <button type="" class="_btn __getmoyen" id="get2smstrmoyn">Calculer la moyenne</button>
                                        </div>
                                        <div class="__inptshow">
                                                <span>votre moyenne ici</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        )
     }
}
export default MesNote;