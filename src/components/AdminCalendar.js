import React from 'react'
import DayPicker from 'react-day-picker';
import './stylesheets/adminCalendar.css';
  
 
class AdminCalendar extends React.Component{
    
    render(){
        return(
            <div className="adminCalendar">
                <DayPicker/>
            </div>
        )
    }
}

export default AdminCalendar;