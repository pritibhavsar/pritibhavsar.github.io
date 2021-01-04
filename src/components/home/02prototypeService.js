import React from "react";
import './02prototypeService.css';

const PrototypeService = () => (
    <section className="prototype_service_info">
        <div className="symbols-pulse active">
            <div className="pulse-1"></div>
            <div className="pulse-2"></div>
            <div className="pulse-3"></div>
            <div className="pulse-4"></div>
            <div className="pulse-x"></div>
        </div>
        <div className="container">
            <h2 className="f_size_30 f_600 t_color3 l_height45 text-center mb_90" data-sal="fade">Our Services</h2>
            <h4 className="f_400 t_color3 l_height28 text-center mb_90" data-sal="fade">We build intelligent solutions for data-driven businesses to enhance their productivity and customer experience.</h4>
            <div className="row p_service_info">
                <div className="col-lg-4 col-sm-6" data-sal="zoom-in"> {/* data-sal-delay="100" data-sal-easing="ease" data-sal-duration="50"*/}
                    <div className="p_service_item pr_70">
                        <div className="icon icon_one"><i className="ti-panel"></i></div>
                        <h5 className="f_600 f_p t_color3">Business Intelligence</h5>
                        <p className="f_400">We are offering leading reporting solutions using different tools of BI. Our extensive and proven experience in forecasting, strategy, optimization, performance analysis, trend analysis, customer analysis, budget planning, financial reporting and more.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-sal="zoom-in">
                    <div className="p_service_item pl_50 pr_20">
                        <div className="icon icon_two"><i className="ti-layout-grid2"></i></div>
                        <h5 className="f_600 f_p t_color3">Solution Architecture</h5>
                        <p className="f_400">We design and maintain technology roadmaps for our clients based upon their individual requirements. We help to identify value opportunities within technology investment and are able to structure and document an effective business case for future enhancement.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-sal="zoom-in">
                    <div className="p_service_item pl_70">
                        <div className="icon icon_three"><i className="ti-fullscreen"></i></div>
                        <h5 className="f_600 f_p t_color3">Proffesional Services</h5>
                        <p className="f_400">We help to overcome the challenge of implementing new technologies with our expertise to deploy latest trends of services & technologies, which helps to achieve simplified operation, increased utilization and overall optimal performances</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-sal="zoom-in">
                    <div className="p_service_item pr_70">
                        <div className="icon icon_four"><i className="ti-bar-chart"></i></div>
                        <h5 className="f_600 f_p t_color3">Managed Services</h5>
                        <p className="f_400">We help you to provide managed service to meet the performance, operational expectations, and security needs of the business while trying to keep costs down. As a provider, we could help you to setting future strategic goals or deploying new services to your IT environment. </p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-sal="zoom-in">
                    <div className="p_service_item pl_50 pr_20">
                        <div className="icon icon_five"><i className="ti-cloud-down"></i></div>
                        <h5 className="f_600 f_p t_color3">System Selection</h5>
                        <p className="f_400">Successful software implementation starts with a careful selection of bundled software. The right choice allows you to position your organization to take advantage of several years of growth. We always ensure that the implementation of the solutions will give the best results.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-sal="zoom-in">
                    <div className="p_service_item pl_70">
                        <div className="icon icon_six"><i className="ti-bolt"></i></div>
                        <h5 className="f_600 f_p t_color3">Integration</h5>
                        <p className="f_400">We offer capabilities around Proprietary and Open Source products for Application Integration, B2B, SOA, API and Cloud Integration. Our Agile and DevOps methodologies ensure stable deployment and faster time to market, adding value to business.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-sal="zoom-in">
                    <div className="p_service_item pr_70">
                        <div className="icon icon_four"><i className="ti-vector"></i></div>
                        <h5 className="f_600 f_p t_color3">Data Migration</h5>
                        <p className="f_400">We help migration of your data from any location. Our experts use proven methodologies that include industry specific best practices and adhere to legal requirements and data privacy standards that ensuring non-disruption and flexibility as a core part of the proven process</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-sal="zoom-in">
                    <div className="p_service_item pl_50 pr_20">
                        <div className="icon icon_five"><i className="ti-direction-alt"></i></div>
                        <h5 className="f_600 f_p t_color3">Business Processes</h5>
                        <p className="f_400">Automated Business Processes play a critical role in helping companies achieve their business strategy by aligning resources, technology and supporting infrastructures towards achieving day by day goals. We offer you to set up those processes in background to get desire outputs.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-sal="zoom-in">
                    <div className="p_service_item pl_70">
                        <div className="icon icon_six"><i className="ti-cup"></i></div>
                        <h5 className="f_600 f_p t_color3">Project Management</h5>
                        <p className="f_400">Having access to project managers who understand specific subject matter within projects is pivotal to success. We deliver project management resourcing that goes beyond timelines and budgets, to provide control over success criteria and architecture decisions.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PrototypeService;
