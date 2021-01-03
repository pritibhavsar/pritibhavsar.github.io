import React from "react"
import './index.css';
import $ from 'jquery';

load();

function load() {
    $('#ctn-preloader').addClass('loaded');
    setTimeout(()=>{
        if ($('#ctn-preloader').hasClass('loaded')) {
            $(this).remove();
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        //    $('#preloader').delay(900).queue(function () {
        //        $(this).remove();
        //    });
        }
    },1000);
}

const Loader = () => (
    <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
            <div className="animation-preloader">
                <div className="spinner"></div><p className="text-center"> Loading... </p></div>
            <div className="loader">
                <div className="row">
                    <div className="col-lg-3 loader-section section-left"><div className="bg"></div></div>
                    <div className="col-lg-3 loader-section section-left"><div className="bg"></div></div>
                    <div className="col-lg-3 loader-section section-right"><div className="bg"></div></div>
                    <div className="col-lg-3 loader-section section-right"><div className="bg"></div></div>
                </div>
            </div>
        </div>
    </div>
    );

export default Loader;