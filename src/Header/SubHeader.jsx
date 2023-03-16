import "./Header.css"

const SubHeader = () => {
    return (
        <div className={'sub_header'}>
            <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
                <div className="left-side">
                    <ul>
                        <li>
                            <a href={void 0}>
                                <i className="fa fa-bars" aria-hidden="true"></i>
                                Brouse By Category
                            </a>
                        </li>
                        <li>
                            <a href={void 0}>Home</a>
                        </li>
                        <li>
                            <a href={void 0}>
                                Easy Monthly Installments
                            </a>
                        </li>
                        <li>
                            <a href={void 0}>
                                Shop by Brands
                            </a>
                        </li>
                        <li>
                            <a href={void 0}>
                                Become a Vendor
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="right-side d-flex flex-wrap d-none d-sm-none d-md-none d-lg-block gap-4">
                    <a href="https://www.facebook.com/" target='_blank'>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/" target='_blank'>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/" target='_blank'>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/" target='_blank'>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
