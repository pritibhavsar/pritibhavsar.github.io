function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceAll(str, term, replacement) {
   return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
}

function getNavigationContent(path) {

    var content = `<div class="container">
    <a class="navbar-brand sticky_logo" href="#"><img src="./images/1logo/logo.svg" alt="logo"><img src="./images/1logo/logo.svg" alt=""></a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="menu_toggle">
            <span class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <span class="hamburger-cross">
                <span></span>
                <span></span>
            </span>
        </span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul class="navbar-nav menu w_menu ml-auto">
            <li class="nav-item active">
                <a class="nav-link dropdown-toggle" href="https://www.palportals.com" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                </a>                                
            </li>
            <li class="nav-item dropdown submenu mega_menu">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Products
                </a>
                <div class="mega_menu_inner">
                    <ul class="dropdown-menu">
                        <li class="nav-item">
                            <a href="./IntranetPortal/index.html" class="nav-link">Intranet Portal</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><a href="./IntranetPortal/index.html" class="nav-link">Intranet Portal</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-grid-3columns.html" class="nav-link">Core HR</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-grid-4columns.html" class="nav-link">Time & Attendance</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-grid-2col-2.html" class="nav-link">Recruiting</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-grid-2col-3.html" class="nav-link">Performace</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-grid-2col-4.html" class="nav-link">Learning</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-grid-2col-4.html" class="nav-link">Self Service</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="http://droitthemes.com/html/saasland/index.html" class="nav-link">Core HR</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-details-1.html" class="nav-link">Office 365</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-details-2.html" class="nav-link">Style 2</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-details-3.html" class="nav-link">Style 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="http://droitthemes.com/html/saasland/index.html" class="nav-link">Learning</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-details-1.html" class="nav-link">Office 365</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-details-2.html" class="nav-link">Style 2</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-details-3.html" class="nav-link">Style 3</a></li>
                            </ul>
                        </li>                                        
                        <li class="nav-item">
                            <a href="http://droitthemes.com/html/saasland/index.html" class="nav-link">Monitoring</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-details-1.html" class="nav-link">Office 365</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-details-2.html" class="nav-link">Style 2</a></li>
                                <li class="nav-item"><a href="http://droitthemes.com/html/saasland/portfolio-details-3.html" class="nav-link">Style 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="dropdown submenu nav-item"><a title="Pages" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Consulting</a>
                <ul role="menu" class=" dropdown-menu">
                    <li class="dropdown submenu nav-item ">
                        <a title="Service" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                            Office 365 
                            <span class="arrow_carrot-right"></span> 
                        </a>
                    </li>
                    <li class="dropdown submenu nav-item">
                        <a title="Service" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                            Azure 
                            <span class="arrow_carrot-right"></span> 
                        </a>
                    </li>
                    <li class="dropdown submenu nav-item">
                        <a title="Service" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                            AWS 
                            <span class="arrow_carrot-right"></span> 
                        </a>
                    </li>    
                </ul>
            </li>
            <li class="dropdown submenu nav-item"><a title="Pages" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Costomers</a>
                <ul role="menu" class=" dropdown-menu">
                    <li class="dropdown submenu nav-item ">
                        <a title="Service" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                            Our Success Stories 
                            <span class="arrow_carrot-right"></span> 
                        </a>
                    </li>
                    <li class="dropdown submenu nav-item">
                        <a title="Service" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                            Our Case Studies 
                            <span class="arrow_carrot-right"></span> 
                        </a>
                    </li>
                    <li class="dropdown submenu nav-item">
                        <a title="Service" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                            Our Solutions
                            <span class="arrow_carrot-right"></span> 
                        </a>
                    </li>
                    <li class="dropdown submenu nav-item">
                        <a title="Service" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                            Your Feedback
                            <span class="arrow_carrot-right"></span> 
                        </a>
                    </li>    
                </ul>
            </li>                            
            <li class="nav-item dropdown submenu">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Resources
                </a>
                <ul class="dropdown-menu">
                    <li class="nav-item"><a href="http://droitthemes.com/html/saasland/shop-grid.html" class="nav-link">Blog & News</a></li>
                    <li class="nav-item"><a href="http://droitthemes.com/html/saasland/shop-list.html" class="nav-link">Help Center</a></li>
                    <li class="nav-item"><a href="http://droitthemes.com/html/saasland/product-details-1.html" class="nav-link">Service Request</a></li>
                    <li class="nav-item"><a href="http://droitthemes.com/html/saasland/shoping-cart.html" class="nav-link">Release Notes</a></li>
                    <li class="nav-item"><a href="http://droitthemes.com/html/saasland/checkout.html" class="nav-link">Videos & Webinars</a></li>                                    
                </ul>
            </li>
            
        </ul>
    </div>
</div>`;
var newContent = replaceAll(content, './', path);
document.getElementById("navigation").innerHTML = newContent;
}

function getFooterContent() {
    // document.getElementById("footer").innerHTML =       
    var content = `<div class="footer_top_six">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-6 ">
                <div class="f_widget company_widget wow slideInLeft">
                    <a href="https://www.palportals.com" class="f-logo"><img src="./images/1logo/logoWhite.svg" alt="logo"></a>
                    <p class="mt_40">Copyright © 2020 <a href="https://www.palportals.com">PALPortals</a></p><span style="color:#1c143b;">v.0.1.2020.03.22</span>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="f_widget about-widget">
                    <h3 class="f-title f_600 w_color f_size_18 mb_40  wow fadeInUp">About Us</h3>
                    <ul class="list-unstyled f_list wow fadeInUp">
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Android App</a></li>
                        <li><a href="#">ios App</a></li>
                        <li><a href="#">Desktop</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="f_widget about-widget">
                    <h3 class="f-title f_600 w_color f_size_18 mb_40  wow fadeInUp">Help?</h3>
                    <ul class="list-unstyled f_list wow fadeInUp">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Term &amp; conditions</a></li>
                        <li><a href="#">Reporting</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6">
                <div class="f_widget social-widget">
                    <h3 class="f-title f_600 w_color f_size_18 mb_40 wow slideInRight">Follow Us</h3>
                    <div class="f_social_icon  wow slideInRight">
                        <a target="_blank" href="https://www.facebook.com/PALPortals-104742791167579" class="ti-facebook"></a>
                        <a href="#" class="ti-twitter-alt"></a>
                        <a href="#" class="ti-vimeo-alt"></a>
                        <a href="#" class="ti-pinterest"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
var newContent = replaceAll(content, './', path);
document.getElementById("footer").innerHTML = newContent;
}

getFooterContent();
