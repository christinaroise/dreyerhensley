import React from 'react'
import Customers from './Customers'
import './stylesheets/customerDB.css'


class CustomerDB extends React.Component{
    render(){
        return(
            <div className="customerDBWrapper">
                <Customers/>
            </div>
        )
    }
}

export default CustomerDB