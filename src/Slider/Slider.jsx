import React from 'react';
import Image from "./assets/images/image116.png"

const Slider = () => {
    return (
        <div className={''}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image} className="d-block w-100" alt=""/>
                        <div className="carousel-caption d-none d-md-block" style={{color: 'black'}}>
                            <h5>Shop Computer & experience</h5>
                            <p>You cannot inspect quality into the product; it is already there. I am not a product of
                                my circumstances.
                                I am a product of my decisions.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image} className="d-block w-100" alt=""/>
                        <div className="carousel-caption d-none d-md-block" style={{color: 'black'}}>
                            <h5>Shop Computer & experience</h5>
                            <p>You cannot inspect quality into the product; it is already there. I am not a product of
                                my circumstances.
                                I am a product of my decisions.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image} className="d-block w-100" alt=""/>
                        <div className="carousel-caption d-none d-md-block" style={{color: 'black'}}>
                            <h5>Shop Computer & experience</h5>
                            <p>You cannot inspect quality into the product; it is already there. I am not a product of
                                my circumstances.
                                I am a product of my decisions.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Slider;
