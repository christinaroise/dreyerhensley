import React from 'react'
import './stylesheets/customers.css'



class Customers extends React.Component{
    render(){
        return(
            <div className="customerWrapper">
                <article className="customer">
                    <div className="profile">
                        <p>E</p>
                    </div>
                    <h2>Robert Ellefsrød</h2>
                    <p>48406198<br/>
                        navn@epost.no</p>
                </article>
                <article className="customer">
                    <div className="profile">
                        <p>J</p>
                    </div>
                    <h2>Ane Johansen</h2>
                    <p>48406198<br/>
                        navn@epost.no</p>
                </article>
                <article className="customer">
                    <div className="profile">
                        <p>B</p>
                    </div>
                    <h2>Kine Bakke</h2>
                    <p>48406198<br/>
                    navn@epost.no</p>
                </article>
            </div>
        )
    }
}

export default Customers