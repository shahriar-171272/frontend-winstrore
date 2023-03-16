import React from 'react';
import "./footer.css"
import image1 from "./assets/images/1.png"
import image2 from "./assets/images/2.png"
import image3 from "./assets/images/3.png"
import image4 from "./assets/images/4.png"
import logo from "./assets/images/Group65.png"

const Footer = () => {
    return (
        <div>
            <div style={{background: '#393939', padding: '56px 0'}}>
                <div className={'container'}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="log">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="got_question">
                                Got questions? Call us 24/7!
                            </div>
                            <div className="mobile">
                                <div className="">
                                    <a href={`tel:03111666144`}> 03 111 666 144</a>
                                </div>
                                <div className="">
                                    <a href={`tel:03171777015`}>0317 1777015.</a>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="">Contact info</div>
                                <div className="email mt-1">
                                    <a href={`mailto:info@winstore.pk`} target={'_blank'}>
                                        info@winstore.pk
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-4 social_icons">
                                <i className="fa fa-facebook " aria-hidden="true"></i>
                                <i className="fa fa-twitter pe-auto" aria-hidden="true"></i>
                                <i className="fa fa-linkedin pe-auto" aria-hidden="true"></i>
                                <i className="fa fa-instagram pe-auto" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row gap-sm-1 gap-md-0">
                                <div className="col col-md-4 offset-lg-1 col-lg-3">
                                    <div className={'footer_title'}>Trending</div>
                                    <ul className={'list_item'}>
                                        <li>
                                            <a href={void 0}>My Account</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Track Your Order</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Recently Viewed</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Wishlist</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Compare</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>
                                                Become a Vendor
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col col-md-4 offset-lg-1 col-lg-3">
                                    <div className={'footer_title'}>Information</div>
                                    <ul className={'list_item'}>
                                        <li>
                                            <a href={void 0}>My Account</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Track Your Order</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Recently Viewed</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Wishlist</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Compare</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>
                                                Become a Vendor
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col col-md-4 offset-lg-1 col-lg-3">
                                    <div className={'footer_title'}>Customer Care</div>
                                    <ul className={'list_item'}>
                                        <li>
                                            <a href={void 0}>My Account</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Track Your Order</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Recently Viewed</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Wishlist</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>Compare</a>
                                        </li>
                                        <li>
                                            <a href={void 0}>
                                                Become a Vendor
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-md-end flex-wrap gap-3"
                                     style={{marginTop: '35px'}}>
                                    <img className={'pe-auto'} src={image1} alt=""/>
                                    <img className={'pe-auto'} src={image2} alt=""/>
                                    <img className={'pe-auto'} src={image3} alt=""/>
                                    <img className={'pe-auto'} src={image4} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="" style={{background: '#161616'}}>
                <div className="container">
                    <div className="footer_text">© 2021 Winstore. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
