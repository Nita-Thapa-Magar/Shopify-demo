import React, { useState } from 'react'
import './style.css';
import './responsive.css';
import Card from "../Card/card";
import Slide from './slider';
import Footer from '../../components/Footer/footer';
import Brand from './brand';

function Home() {
    const [dropDown, setDropDown] = useState(false)
    
    const handleClick = () => {
        dropDown ? setDropDown(false) : setDropDown(true)
        console.log('this is dropDown', dropDown)
    }
    
    const arrowPosition = dropDown ? 'open' : 'closed'
    const descriptionActive = dropDown ? 'open' : ''
  

    return (
        <>
        <header>
            <div className="header-container">
                <div className="gradient_container_bottom"></div> 
                <section className="header-nav-area">
                    <span className="menu-icon"></span>
                </section> 
                <div className="slider-container">
                    <div className="wrapper">
                        <div className="article">
                            <h1>
                                <a href="#">NASA's Mars 2010 Will Blaze a Trail -- for Humans</a>
                                <span className={`arrow ${arrowPosition}`} onClick={handleClick}></span>
                            </h1>
                            <div className={`description ${descriptionActive}`}>
                            The next robotic Mars mission will carry technology that will help enable astronauts to eventually explore the Red Planet.
                            </div>
                            <footer><a href="#">Explore More</a></footer>
                        </div>
                    </div>
                </div>
                <div className="bullets-count">
                    <div className="bullet bullet-selected" id="bullet-one"></div>
                    <div className="bullet" id="bullet-two"></div>
                    <div className="bullet bullet-three"></div>
                    <div className="bullet bullet-four"></div>
                </div>
                <section className="dashboard">
                    <div className="slide_container">
                        <button className="slick-prev"></button>
                        <div className="slick-list">
                            <div className="slick-track slick-active" index="0">
                                <article className="slide">
                                    <div className="image_and_description_container">
                                        <div className="readout">
                                            <div className="title">Curiosity</div>
                                            <div className="value">2440 SOLS ON MARS</div>
                                        </div>
                                    </div>
                                    <span className="circle_plus"></span>
                                </article>
                            </div>
                            <div className="slick-track" index="1">
                                <article className="slide">
                                    <div className="image_and_description_container">
                                        <div className="readout">
                                            <div className="title">Oppportunity</div>
                                            <div className="value">12 YEARS ON MARS</div>
                                        </div>
                                    </div>
                                    <span className="circle_plus"></span>
                                </article>
                            </div>
                            <div className="slick-track" index="2">
                                <article className="slide">
                                    <div className="image_and_description_container">
                                        <div className="readout">
                                            <div className="title">INSIGHT</div>
                                            <div className="value">320 SOLS ON MARS</div>
                                        </div>
                                    </div>
                                    <span className="circle_plus"></span>
                                </article>
                            </div>
                        </div>
                         <button className="slick-next"></button>
                    </div>
                </section>

                <div className="nav-prev"></div>
                <div className="nav-next"></div>
            </div>
        </header>
        <main>
            <div className="main-content">
            <Brand />
            <Slide />
            </div>
            </main>
        <footer>
            <div className="footer-container">
                <Footer />
            </div>
        </footer>
        </>
    );
}
export default Home;
