import React from 'react';
import { HashRouter, Route, NavLink} from "react-router-dom";
import '../stylesheets/infoUtleie.css';
import blueprint from '../images/dreyhen011.jpg';
import Booking from '../../Booking.js';

const InfoUtleie = () => { 
    return(
        <HashRouter basename="/">
            <div className="infoUtleie">
                <div>
                    <img src={blueprint} alt=""/>
                </div>
                <h1>Interessert i å leie studioet?</h1>
                <p>Som en liten smakebit, kan vi fortelle at studioeet er stort og åpent med god takhøyde. Det har to store vinduer i enden som gjør det til et lyst og behagelig studio - perfekt for den som trenger mye naturlig lys, eller til et hyggelig selskap av ulike slag. Lokalet er også utstyrt med et moderne og godt utstyrt kjøkken. Gulvflaten er på 90m², med en mezzanin på 40m².</p>  
                <h5>Ta kontakt for nærmere informasjon om pris.</h5>
                <NavLink exact to="/booking">
                    <button>Book tid</button>
                </NavLink>
                <Route exact path="/booking" component={Booking} /> 
            </div>
        </HashRouter>
    )  
}

export default InfoUtleie