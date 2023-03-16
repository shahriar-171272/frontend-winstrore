import logo from "./assets/images/Group65.png"
import "./MainHeader.css"
import user from "./assets/images/user.png"
import fav from "./assets/images/Vector.png"
import headphone from "./assets/images/headphones-svgrepo-com.png"
import cart from "./assets/images/shopping-cart.png"

const MainHeader = () => {
    return (
        <div className={'main_header'}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="left_side d-flex align-items-center">
                    <img className={'header_logo'} src={logo} alt=""/>
                    <div className="search_section">
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle category_dropdown" href="#" role="button"
                               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                All categories
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control search_box"
                                placeholder="Search for products"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"/>
                            <span className="input-group-text" id="basic-addon2">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="right_side d-flex align-items-center justify-content-between">
                    <div className="me-4 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                        <div className="call_us">Call Us Now</div>
                        <div className="d-flex align-items-center space">
                            <img className={'me-1'} src={headphone} alt=""/>
                            <a className={'text-decoration-none headphone'} href={`tel:0115827918`}>+011 5827918</a>
                        </div>
                        <div className="sign_in">Sign In</div>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <img src={user} alt="user"/>
                        <img src={fav} alt="fav"/>
                        <div className="cart_section">
                            <img src={cart} alt="cart"/>
                            <div className="cart_text">Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
