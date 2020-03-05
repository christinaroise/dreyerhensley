import React from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './stylesheets/daypickerCalendar.css';

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
  const WEEKDAYS_SHORT = ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'];
  
 
class Calendar extends React.Component{
    
    sendData = (selectedDate) => {
        this.props.parentCallback(selectedDate);
    }

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
          selectedDay: null,
        };
      }
    
      handleDayClick(day, { selected }) {
        this.setState({
          selectedDay: selected ? undefined : day,
        });
        this.sendData(day);
      }
    
    render(){
        return(
            <div>
                <DayPicker
                locale="no"
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                firstDayOfWeek={1}
                
                selectedDays={this.state.selectedDay}
                onDayClick={this.handleDayClick}
                />
            </div>
        )
    }
}

export default Calendar;