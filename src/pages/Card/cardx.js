import React, {Component} from 'react';
import Slider from "./index";
import shop from '../../images/shop.jpg';

class Cards extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            <div className="col-md-4">
                <Slider imgsrc={shop} title="Card 1"/>
            </div>
            <div className="col-md-4">
                <Slider imgsrc={shop} title="Card 2"/>
            </div>
            <div className="col-md-4">
                <Slider imgsrc={shop} title="Card 3"/>
            </div>
            </div>
            </div>
        );
    }
}
export default Cards;