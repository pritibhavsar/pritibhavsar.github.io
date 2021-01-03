import React from "react";
import './04securityArea.css';

const SecurityArea = () => (
    <section className="h_security_area">
        <div className="container">
            <div className="hosting_title security_title text-center">
                <h2 className="f_p f_size_30 l_height30 f_700 t_color3 mb_20" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="50" data-sal="slide-up" data-sal-delay="500">Our Digital Workplace Products</h2>
                <p className="f_400 f_size_16" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="50">We provide the highest quality of products and services to drive day-to-day employee operations.</p>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="media h_security_item pr_70" data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="50">
                        <img src="./images/3security/enterprice_184x170.png" alt="" />
                        <div className="media-body">
                            <h4>Intranet Portals for engaging your team</h4>
                            <p>More then 40 user components to build better digital workforce.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="media h_security_item pl_70" data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="50">
                        <img src="./images/3security/security_2.png" alt="" />
                        <div className="media-body">
                            <h4>Branding your themes</h4>
                            <p>Customize the branding your way of comfort</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="media h_security_item pr_70" data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="50">
                        <img src="./images/3security/security_3.png" alt="" />
                        <div className="media-body">
                            <h4>Cloud Infrastructures monitoring</h4>
                            <p>Monitoring your infrastructures to avoid any violance</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="media h_security_item pl_70" data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="50">
                        <img src="./images/3security/security_4.png" alt="" />
                        <div className="media-body">
                            <h4>Secure digital workforce</h4>
                            <p>SaaS based tools to help you to secure your digital workforce</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SecurityArea;
