import React from 'react';
import './stylesheets/slideshow.css'
import dreyhen003 from './images/dreyhen003.jpg'
import dreyhen005 from './images/dreyhen005.jpg'
import dreyhen006 from './images/dreyhen006.jpg'
import dreyhen007 from './images/dreyhen007.jpg'
import dreyhen010 from './images/dreyhen010.jpg'

class Slideshow extends React.Component{
    render(){
        return(
            <section>
                <div className="wrapper">
                    <div className="slides">
                        <article>
                            <img src={dreyhen005} alt=""/>
                        </article>
                        <article>
                            <img src={dreyhen003} alt=""/>
                        </article>
                        <article>
                            <img src={dreyhen006} alt=""/>
                        </article>
                        <article>
                            <img src={dreyhen007} alt=""/>
                        </article>
                        <article>
                            <img src={dreyhen010} alt=""/>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}

export default Slideshow;