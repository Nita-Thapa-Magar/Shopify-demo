import React from 'react'
import Brand1 from '../../images/brand1.png';
import Shopify from '../../images/shopify.png';
import './brand.css';

export default function Brand() {
    return (
        <section id="brand-section">
            <div  className="brand-container">
                <h4 className="brand-title">Brands</h4>
                <div  className="brands">
                    <div  className="brand-slide">
                        <a href="#"><img src={Brand1}  className="brand-image" alt="brand1"/></a>
                    </div>
                    <div  className="brand-slide">
                        <a href="#"><img src={Shopify}  className="brand-image" alt="brand1"/></a>
                    </div>
                    <div  className="brand-slide">
                        <a href="#"><img src={Brand1}  className="brand-image" alt="brand1"/></a>
                    </div>
                    <div  className="brand-slide">
                        <a href="#"><img src={Brand1}  className="brand-image" alt="brand1"/></a>
                    </div>
                    <div  className="brand-slide">
                        <a href="#"><img src={Brand1}  className="brand-image" alt="brand1"/></a>
                    </div>
                    <div  className="brand-slide">
                        <a href="#"><img src={Brand1}  className="brand-image" alt="brand1"/></a>
                    </div>
                </div>	
            </div>	
        </section>
    )
}
