import React from "react"
import './index.css';

const PageHeader = ({name}) => (
    <section className="breadcrumb_area">
        <div className="container">
            <div className="breadcrumb_content text-center">
                <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">{name}</h1>
            </div>
        </div>
    </section>
    );

export default PageHeader;