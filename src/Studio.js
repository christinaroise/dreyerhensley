import React from 'react';
import Slideshow from './components/Slideshow';
import Info from './components/Info';


class Studio extends React.Component{
    render(){
        return(
            <div className="studio">
                <Slideshow />
                <Info /> 
            </div>
        )
    }
}

export default Studio;