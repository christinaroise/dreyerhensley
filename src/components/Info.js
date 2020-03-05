import React from 'react';
import InfoStudio from './infoComponents/infoStudio.js'
import InfoUtleie from './infoComponents/InfoUtleie.js'
import InfoKontakt from './infoComponents/InfoKontakt.js'
import './stylesheets/info.css'

function showDivComponent(div){
    let studio = document.getElementById("studioDiv")
    let studioBtn = document.getElementById("studioBtn")
    let utleie = document.getElementById("utleieDiv")
    let utleieBtn = document.getElementById("utleieBtn")
    let kontakt = document.getElementById("kontaktDiv")
    let kontaktBtn = document.getElementById("kontaktBtn")

    if(div === "studioDiv"){
        studio.className = "show";
        studioBtn.className = "selected";
        utleie.className = "hide";
        utleieBtn.className = "";
        kontakt.className = "hide";
        kontaktBtn.className = "";
    }else if(div === "utleieDiv"){
        studio.className = "hide";
        studioBtn.className = "";
        utleie.className = "show";
        utleieBtn.className = "selected";
        kontakt.className = "hide";
        kontaktBtn.className = "";
    }else if(div === "kontaktDiv"){
        studio.className = "hide";
        studioBtn.className = "";
        utleie.className = "hide";
        utleieBtn.className = "";
        kontakt.className = "show";
        kontaktBtn.className = "selected";
    }
}

const Info = () => { 
    
    function showMenu(){
        const button = document.getElementById("mobileButtonContainer")
        const menu = document.getElementById("mobInfoNavContainer")


        if(button.innerHTML === "+"){
            menu.style.setProperty('visibility', 'visible')
        }else{
            if(button.innerHTML === "-"){
                menu.style.setProperty('visibility', 'collapse')
            }
        }
    }

    return(
        <div>
            <nav id="mobileInfoNav">
                <div>
                    <button id="mobileButtonContainer" onClick={showMenu}>+</button>
                </div>
                <div id="mobInfoNavContainer">
                    <div id="mobInfoNav">
                        <button id="mobStudioBtn" onClick = { () => {showDivComponent("studioDiv")}}>Studio</button>
                        <button id="mobUtleieBtn" onClick = { () => {showDivComponent("utleieDiv")}}>Utleie</button>
                        <button id="mobKontaktBtn" onClick = { () => {showDivComponent("kontaktDiv")}}>Kontakt</button>
                    </div>
                </div>
            </nav>
            <section className="infoContainer" >
                <div className="wrapper">
                    <nav id="infoNav">
                        <button className="selected" id="studioBtn" onClick = { () => {showDivComponent("studioDiv")}}>Studio</button>
                        <button id="utleieBtn" onClick = { () => {showDivComponent("utleieDiv")}}>Utleie</button>
                        <button id="kontaktBtn" onClick = { () => {showDivComponent("kontaktDiv")}}>Kontakt</button>
                    </nav>
                </div>
                <div  className="infoCompWrapper">
                    <div id="studioDiv" className="show"><InfoStudio /></div>
                    <div id="utleieDiv" className="hide"><InfoUtleie /></div>
                    <div id="kontaktDiv" className="hide"><InfoKontakt /></div>
                </div>
            </section>
        </div>
    )  
  
}

export default Info