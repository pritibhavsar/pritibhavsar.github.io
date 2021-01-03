import React from "react";
import './03appServiceArea.css';

const AppServiceArea = () => (
    <section className="app_service_area app_service_area_two">
        <div className="container">
            <div className="sec_title text-center mb_70">
                <h2 className="f_p f_size_30 l_height30 f_700 t_color3 mb_20" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">Why PALPortals</h2>
                <p className="f_400 f_size_16" data-sal="fade" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
                    We are full-scale integrated Information Technology and Software Company. We offer an integrated portfolio of products, solutions and services since a decade with in-house development team.
                </p>
            </div>
            <div className="row app_service_info">
                <div className="col-lg-4 col-sm-6" data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
                    <div className="app_service_item">
                        <i className="ti-loop app_icon one"></i>
                        <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">Partnership</h5>
                        <p className="f_400 f_size_15 mb-30">
                            Providing a real-time digital solutions with high responsiveness, high intelligence and high performace to maintain long-term partnership  
                        </p>
                        {/* <a href="#" className="learn_btn_two c_violet">Learn More <i className="ti-arrow-right"></i></a>  */}
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
                    <div className="app_service_item">
                        <i className="ti-paragraph app_icon two"></i>
                        <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">Commitment</h5>
                        <p className="f_400 f_size_15 mb-30">We are committed to total customer satisfaction through providing consistently high quality products and services by adopting best practices.</p>
                        {/* <a href="#" className="learn_btn_two c_violet">Learn More <i className="ti-arrow-right"></i></a> */}
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
                    <div className="app_service_item">
                        <i className="ti-target app_icon three"></i>
                        <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">Innovative</h5>
                        <p className="f_400 f_size_15 mb-30">We don't need social approval to go forward, our innovative thoughts lead us to make our deliverable unique that add values beyond expectation. </p>
                        {/* <a href="#" className="learn_btn_two c_violet">Learn More <i className="ti-arrow-right"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AppServiceArea;
