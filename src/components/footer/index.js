import { Link } from "gatsby"
import LogoWhite from '../../../src/images/footer/logoWhite.svg';
import React from "react"
import './footer.css';
let todayYear = new Date().getFullYear();
const Footer = () => (    
    <footer className="footer_area_six sec_pad" id="footer">
        <div className="footer_top_six">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 ">
                        <div className="f_widget company_widget" data-sal="flip-up" data-sal-delay="2" data-sal-easing="ease" data-sal-duration="20">
                            <Link to="/" className="f-logo"><img className="protype_img" src={LogoWhite} alt="logo" data-sal="slide-up" data-sal-delay="2" data-sal-easing="ease" data-sal-duration="20"/></Link>
                            <p className="mt_40">Copyright © 2017 - {todayYear} <Link to="/">PALPortals</Link></p>
                            <p className="mt_40"><Link to='/Legal' id="Legal">Legal</Link> | <Link to="/Terms" id="Terms">Terms of use</Link> | <Link to="/Privacy" id="Privacy">Privacy</Link></p>
                            <span style={{"color":"#1c143b"}}>v.0.1.2021.01.02</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="f_widget about-widget" data-sal="flip-up" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="100">
                            <h3 className="f-title f_600 w_color f_size_18 mb_40">About Us</h3>
                            <ul className="list-unstyled f_list wow fadeInUp">
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Android App</a></li>
                                <li><a href="#">ios App</a></li>
                                <li><a href="#">Desktop</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="f_widget about-widget"  data-sal="flip-up" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="100">
                            <h3 className="f-title f_600 w_color f_size_18 mb_40">Help?</h3>
                            <ul className="list-unstyled f_list wow fadeInUp">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Term &amp; conditions</a></li>
                                <li><a href="#">Reporting</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <div className="f_widget social-widget"  data-sal="flip-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="100">
                            <h3 className="f-title f_600 w_color f_size_18 mb_40">Follow Us</h3>
                            <div className="f_social_icon  wow slideInRight">
                                <a target="_blank" href="https://www.facebook.com/PALPortals-104742791167579" className="ti-facebook"></a>
                                <a href="#" className="ti-twitter-alt"></a>
                                <a href="#" className="ti-vimeo-alt"></a>
                                <a href="#" className="ti-pinterest"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);  

export default Footer;