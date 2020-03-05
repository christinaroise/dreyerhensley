import React from 'react';
import { HashRouter, Route, NavLink} from "react-router-dom";
import './components/stylesheets/booking.css';
import Calendar from './components/Calendar.js';
import Form from './components/Form.js';
import Admin from './Admin'


const MONTHS = [
    'Januar',
    'Februar',
    'Mars',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
const WEEKDAYS_LONG = [
    'Søndag',
    'Mandag',
    'Tirsdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lørdag'
  ];

class Booking extends React.Component {

    state = {
        selectedDate: new Date(), 
        hasSelectedDate: false
    }

    getWeekday = (number) => {
        return WEEKDAYS_LONG[number]
    }

    getMonth = (number) => {
        return MONTHS[number]
    }

    callbackFunction = (childData) => {
        this.setState({
            selectedDate: childData,
            hasSelectedDate: true
        })
        console.log(childData)
        console.log(childData.getTime())
    }

    render(){
        return(
           <HashRouter>
                <section className="bookingWrapper">
                    <article className="adminLink">
                        <NavLink exact to="/admin">
                            <button>Admin</button>
                        </NavLink>
                    </article>
                    <section className="booking">
                        <div>
                            <Calendar parentCallback = {this.callbackFunction} />
                        </div>
                        <div className="form">
                            <Form 
                            weekday= {this.getWeekday(this.state.selectedDate.getDay())} 
                            day={this.state.selectedDate.getDate()} 
                            month={this.getMonth(this.state.selectedDate.getMonth())} 
                            year={this.state.selectedDate.getFullYear()} 
                            dateInMs={this.state.selectedDate.getTime()}
                            
                            hasSelectedDate={this.state.hasSelectedDate}/>   
                        </div>
                    </section>

                    <section className="mobileBooking">
                        <div className="mobForm">
                            <Form 
                            weekday= {this.getWeekday(this.state.selectedDate.getDay())} 
                            day={this.state.selectedDate.getDate()} 
                            month={this.getMonth(this.state.selectedDate.getMonth())} 
                            year={this.state.selectedDate.getFullYear()} 
                            dateInMs={this.state.selectedDate.getTime()}
                            
                            hasSelectedDate={this.state.hasSelectedDate}/> 
                        </div>
                        <div className="mobCalendar">
                            <Calendar parentCallback = {this.callbackFunction} />  
                        </div>
                        <Route exact path="/admin" component={Admin} /> 
                    </section>
                </section>
           </HashRouter>
        )
    }
}

export default Booking
