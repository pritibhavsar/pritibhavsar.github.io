// import Image from '../image';
import React from "react";
import HDR from '../../images/svg/home_undraw_work_together_h63l.svg';
import BannerImage from '../../images/banner_bg.png';
import './01agencyBanner.css';
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

const AgencyBanner = () => (
    <section className="agency_banner_area bg_color">
        <img className="banner_shap" src={BannerImage} alt="PALPortals"></img>
        {/* <Image filename={"../../images/banner_bg.png"} alt={"bannerImage"} className="banner_shap" />
        <img className="protype_img" data-wow-delay="0.3s" src={HDR} alt="" style={{"visibility": "visible", "animation-delay" : "0.3s", "animation-name" : "fadeInRight" }} /> 
        <Img fixed={data.file.childImageSharp.fixed} /> 
        <Image className="banner_shap" filename={"banner_bg.png"} alt={"bannerImage"} />*/}        
        <div className="container custom_container">
            <div className="row">
                <div className="col-lg-5 d-flex align-items-center">
                    <div className="agency_content carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h2 className="f_700 t_color3 mb_40">Security</h2>
                                <p className="f_400 l_height28 wow fadeInLeft">We help you to protect your organization's data and keeping critical information secure. Control and help secure emails, documents, and sensitive data that you share outside of your organization.</p>
                            </div>
                            <div className="carousel-item">
                                <h2 className="f_700 t_color3 mb_40">Policies</h2>
                                <p className="f_400 l_height28">We help you to implement data retention policies, archiving and compliance policies. Policies are serious matters and it is important to consider the long term consequences of implementing them wisely. </p>
                            </div>
                            <div className="carousel-item">
                                <h2 className="f_700 t_color3 mb_40">Monitoring</h2>
                                <p className="f_400 l_height28">We help you to continue monitor and analyze to tackle the spiraling complexity of managing your Cloud environment. Provide SaaS based user experience coverage for all of your Office 365 services 24 X 7.</p>
                            </div>
                            <div className="carousel-item">
                                <h2 className="f_700 t_color3 mb_40">Cloud</h2>
                                <p className="f_400 l_height28">We help you to reduce costs, increase productivity, and mitigate risk at an affordable price, irrespective of Private Cloud, Public Cloud or a Hybrid. Also assess and determine what is best for your environment.</p>
                            </div>
                            <div className="carousel-item">
                                <h2 className="f_700 t_color3 mb_40">Consulting</h2>
                                <p className="f_400 l_height28">We help you to provide effective consulting for Microsoft Office 365, Mobile App development, Customizing, Branding or Integration with other systems as per need and end-to-end product development.</p>
                            </div>
                            {/* <div className="action_btn d-flex align-items-center mt_60">
                                <a href="#" className="btn_hover agency_banner_btn wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">Get in Touch</a>
                                <a href="#" className="agency_banner_btn_two wow fadeInLeft" data-wow-delay="0.7s" style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInLeft;">Google Sing Up</a>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 text-right">
                    <img className="protype_img" src={HDR} alt="" data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="50" />
                </div>
            </div>
        </div>
    </section>
);

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "banner_bg.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

export default AgencyBanner;
