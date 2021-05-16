import React from 'react';
import './card.css';

const Card = props =>{
    return(
        <div className="card text-center">
        <div className="overflow">
            <img src={props.imgsrc} className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
            Most of the carousel components are responsive to the viewport size, but this is not a real responsive support as we can have an element with a width:500px on a 1200px screen, most carousel component will "think" we are on a 1200px mode because they "watch" the view-port's size and not the wrapping element's size. This is the reason why react-eleastic-carousel is using the resize-observer which gives us a true responsive support, not matter on what screen size we are.
            </p>
            <a href="#" className="btn btn-outline-success">Learn More</a>
        </div>
        </div>
    );
}

export default Card;
