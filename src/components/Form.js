import React from 'react';
import BookingService from './businessLogic/bookingService';
import 'react-day-picker/lib/style.css';
import './stylesheets/form.css';
 
class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            showStep3: false,
        };
      }

    submitBooking = () => {
        this.setState({
            showStep3: true
        })
    }



    render(){

        let step1
        let stepnumber1
        let step2
        let stepnumber2
        let step3
        let stepnumber3

        if(this.state.showStep3){
            stepnumber3 = <h1>3</h1>
            step3 = <div className="step1-3div">
            <p>Tusen takk!</p>
            <h1>Din forespørsel er nå sendt.</h1>
        </div>  
        }

        if(!this.props.hasSelectedDate){
            stepnumber1 = <h1>1</h1>
            step1 = <div className="step1-3div"><h1>Når ønsker du å booke studioet?</h1></div>
        }else if(this.props.hasSelectedDate && !this.state.showStep3){
            stepnumber2 = <h1>2</h1>
            step2 = <div className="step2div">
            <div className="selectedDay">
                <p>
                    Du har valgt {this.props.weekday} {this.props.day}. {this.props.month} {this.props.year}
                </p>
            </div>
            <div className="bookingFormContainer">
                <form className="bookingForm" autoComplete="off">
                   <div className="firstInput">
                        
                        <label htmlFor="other">Navn: </label>
                        <input type="text" ref="name" required/>
                    
                    
                        <label htmlFor="other">Mobil: </label>
                        <input type="text" id="phonenumber" required/>
                    
                        <label htmlFor="other">E-post: </label>
                        <input type="text" id="email" required/>
                    
                        <label htmlFor="other">Type: </label>
                        <input list="bookingType" id="type" required/>
                        <datalist id="bookingType">
                            <option value="Kommersielt"/>
                            <option value="Redaksjonel"/>
                            <option value="Privat"/>
                            <option value="Annet"/>
                        </datalist>
                   </div>

                   <div className="firstInputMOB">
                       
                        <input type="text" ref="nameMob" placeholder="Navn" required/>
                        <input type="text" id="phoneMob" placeholder="Mobil" required/>
                        
                        <input type="text" id="emailMob" placeholder="E-post" required/>

                        <input list="bookingType" id="typeMob" placeholder="TYPE" required/>
                        <datalist id="bookingTypeMob">
                            <option value="Kommersielt"/>
                            <option value="Redaksjonel"/>
                            <option value="Privat"/>
                            <option value="Annet"/>
                        </datalist>
                   </div>

                    <div className="checkboxDiv">
                        <div>
                           <button >Heldag</button>
                        </div>
                        <div>
                            <button >Halvdag</button> 
                        </div>
                        <div>
                            <button >Annet</button>
                        </div>
                    </div>

                    <textarea id="message" name="message" rows="10" cols="30" placeholder="Legg ved nødvendig informasjon" required></textarea>
                    
                    <button id="formButton" onClick={this.submitBooking}>Send</button>
                </form>
            </div>
        </div>
        }


        return(
            <section className="stepContainer">
                <div className="stepNumber">
                    {stepnumber1}
                    {stepnumber2}
                    {stepnumber3}
                </div> 
                {step1}
                {step2}
                {step3}
            </section>
        )
    }
}

export default Form;
