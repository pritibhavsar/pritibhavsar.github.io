import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, {useEffect} from "react"
import $ from 'jquery';
import './index.css';
import Logo from '../../images/svg/logo.svg';

function Header() {  
  useEffect(()=>{
    let pathname = window.location.pathname;
    let paths = pathname.split('/');
    debugger;
    if(paths.length > 2){
      $("#" + paths[1]).parent().addClass("active");
      $("#" + paths[paths.length-2]).parent().addClass("active");
      $("#" + paths[paths.length-1]).parent().addClass("active");
    }
    else {
      
      if((paths.length == 2 && paths[0] =="" && paths[1]=="") || (pathname.search("index") >= 0))
          $("#Home").parent().addClass("active");
      else {
        $("#" + paths[1]).addClass("footerActive");
      }
    }
  });

  return (
    <header className="header_area navbar_fixed">
      <nav className="navbar navbar-expand-lg" id="navigation">
        <div className="container">
          <a className="navbar-brand sticky_logo" href="www.palportals.com"><img src={Logo} alt="logo" /> <img src={Logo} alt="" /></a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="menu_toggle">
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="hamburger-cross">
                <span></span>
                <span></span>
              </span>
            </span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav menu w_menu ml-auto">
                <li className="nav-item">
                  <Link to='/' className="nav-link" id ="Home">Home</Link>
                </li>
                <li className="nav-item dropdown submenu mega_menu">
                  <span className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="Products">
                    Products
                  </span>
                  <div className="mega_menu_inner">
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <span className="nav-link" id="Templates">SharePoint Templates</span>
                        <ul className="dropdown-menu">
                          <li className="nav-item"><Link to="../../../Products/Templates/Demo1" className="nav-link" id="Demo1">Demo 1</Link></li>
                          <li className="nav-item"><Link to="../../../Products/Templates/Demo2" className="nav-link" id="Demo2">Demo 2</Link></li>
                          <li className="nav-item"><Link to="../../../Products/Templates/Demo3" className="nav-link" id="Demo3">Demo 3</Link></li>
                          <li className="nav-item"><Link to="../../../Products/Templates/Webparts" className="nav-link" id="Webparts">Web Parts</Link></li>
                        </ul>
                      </li>  
                      <li className="nav-item">
                        <span className="nav-link" id ="Portals">Portals</span>
                        <ul className="dropdown-menu">
                            <li className="nav-item"><Link to="../../../Products/Portals/IntranetPortals" className="nav-link" id ="IntranetPortals">Intranet Portal</Link></li>
                            <li className="nav-item"><Link to="../../../Products/Portals/CoreHR" className="nav-link" id ="CoreHR">Core HR</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link">Time & Attendance</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link">Recruiting</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link">Performace</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link">Learning</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link">Self Service</Link></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                          <span to="#" className="nav-link">Office 365</span>
                          <ul className="dropdown-menu">
                              <li className="nav-item"><Link to="#" className="nav-link">Office 365 Management</Link></li>
                              <li className="nav-item"><Link to="#" className="nav-link">Application Development</Link></li>
                              <li className="nav-item"><Link to="#" className="nav-link">Migration</Link></li>
                          </ul>
                      </li>
                      <li className="nav-item">
                          <span to="#" className="nav-link">Azure</span>
                          <ul className="dropdown-menu">
                              <li className="nav-item"><Link to="#" className="nav-link">Office 365</Link></li>
                              <li className="nav-item"><Link to="#" className="nav-link">Add Ins</Link></li>
                              <li className="nav-item"><Link to="#" className="nav-link">Branding</Link></li>
                          </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown submenu nav-item"><a title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Consulting</a>
                  <ul role="menu" className=" dropdown-menu">
                    <li className="dropdown submenu nav-item ">
                      <Link title="Service" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Office 365<span className="arrow_carrot-right"></span></Link>
                    </li>
                    <li className="dropdown submenu nav-item">
                      <Link title="Service" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Azure<span className="arrow_carrot-right"></span></Link>
                    </li>
                    <li className="dropdown submenu nav-item">
                      <Link title="Service" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">AWS<span className="arrow_carrot-right"></span></Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown submenu nav-item"><a title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Customers</a>
                  <ul role="menu" className=" dropdown-menu">
                    <li className="dropdown submenu nav-item ">
                      <Link title="Service" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Our Success Stories<span className="arrow_carrot-right"></span></Link>
                    </li>
                    <li className="dropdown submenu nav-item">
                      <Link title="Service" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Our Case Studies<span className="arrow_carrot-right"></span></Link>
                    </li>
                    <li className="dropdown submenu nav-item">
                      <Link title="Service" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Our Solutions<span className="arrow_carrot-right"></span></Link>
                    </li>
                    <li className="dropdown submenu nav-item">
                      <Link title="Service" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Your Feedback<span className="arrow_carrot-right"></span></Link>
                    </li>    
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources</Link>
                    <ul className="dropdown-menu">
                        <li className="nav-item"><Link to="#" className="nav-link">Blog & News</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link">Help Center</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link">Service Request</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link">Release Notes</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link">Videos & Webinars</Link></li>
                    </ul>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header
