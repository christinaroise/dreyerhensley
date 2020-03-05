import React from 'react';
import { HashRouter, Route, NavLink} from "react-router-dom";
import './components/stylesheets/admin.css'
import CustomerDB from './components/CustomerDB'
import AdminCalendar from './components/AdminCalendar'
import Customers from './components/Customers'

class Admin extends React.Component {
    
    render(){
        return(
            <HashRouter>
                <section className="adminWrapper">
                    <article className="admin">
                    <div className="calendarContainer">
                        <h3>Kalender</h3>
                        <AdminCalendar/>
                    </div>
                    <div className="customers">
                        <h3>Kommende bookinger</h3>
                        <Customers/>
                        <NavLink exact to="/admin/kunder">
                            <button>Til kundedatabasen</button>
                        </NavLink>
                    </div>
                    <div>
                        <h3>Leads</h3>
                        <div className="leads">
                            <p>Innhold kommer...</p>
                        </div>
                    </div>
                    <div>
                        <h3>Statistikk</h3>
                        <div className="stats">
                            <p>Innhold kommer..</p>
                        </div>
                    </div>
                    </article>
                    <Route exact path="/admin/kunder" component={CustomerDB}/>
                </section>
            </HashRouter>
        )
    }
}

export default Admin
