
function getNavigationContent(idx) {
    var content =
     `<div class="container">
        <a class="navbar-brand sticky_logo" href="~~~"><img src="~~~images/1logo/logo.svg" alt="logo"><img src="~~~images/1logo/logo.svg" alt=""></a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
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
                <li class="nav-item">
                    <a href="~~~" class="nav-link" id ="Home">Home</a>
                </li>
                <li class="nav-item dropdown submenu mega_menu">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="Products">
                        Products
                    </a>
                    <div class="mega_menu_inner">
                        <ul class="dropdown-menu">
                            <li class="nav-item">
                                <a href="~~~products/templates/templatedemo.html" class="nav-link">SharePoint Templates</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="~~~products/templates/classic/index.html" class="nav-link">Demo 1</a></li>
                                    <li class="nav-item"><a href="~~~products/templates/modern/" class="nav-link">Demo 2</a></li>
                                    <li class="nav-item"><a href="~~~products/templates/template.html" class="nav-link">Demo 3</a></li>
                                    <li class="nav-item"><a href="~~~products/templates/webparts.html" class="nav-link">Web Parts</a></li>
                                </ul>
                            </li>  
                            <li class="nav-item">
                                <a href="~~~products/portals/index.html" class="nav-link" id ="Portals">Portals</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="~~~products/portals/intranetportal.html" class="nav-link" id ="IntranetPortal">Intranet Portal</a></li>
                                    <li class="nav-item"><a href="~~~products/portals/corehr.html" class="nav-link" id ="CoreHr">Core HR</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Time & Attendance</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Recruiting</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Performace</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Learning</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Self Service</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Office 365</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="#" class="nav-link">Office 365 Management</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Application Development</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Migration</a></li>
                                </ul>
                            </li>                                                              
                            <li class="nav-item">
                                <a href="#" class="nav-link">Azure</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="#" class="nav-link">Office 365</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Add Ins</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Branding</a></li>
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
                        <li class="nav-item"><a href="#" class="nav-link">Blog & News</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Help Center</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Service Request</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Release Notes</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Videos & Webinars</a></li>                                    
                    </ul>
                </li>            
            </ul>
        </div>
    </div>`;
var newContent;
    if(idx==0){
        newContent = content.replace(/~~~/gi, "./");
    }
    else if(idx==1){
        newContent = content.replace(/~~~/gi, "../");
    }
    else if(idx==2){
        newContent = content.replace(/~~~/gi, "../../");
    }
    document.getElementById("navigation").innerHTML = newContent;
}

function getFooterContent(idx) {
    var content =
    `<div class="footer_top_six">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6 ">
                    <div class="f_widget company_widget wow slideInLeft">
                        <a rel="canonical" href="https://www.palportals.com" class="f-logo"><img src="~~~images/1logo/logoWhite.svg" alt="logo"></a>
                        <p class="mt_40">Copyright © 2020 <a rel="canonical" href="https://www.palportals.com">PALPortals</a></p>
                        <p class="mt_40"><a rel="canonical" href="~~~legal.html" id="Legal">Legal</a> | <a rel="canonical" href="~~~website-usage-terms-and-conditions.html" id="Terms">Terms of use</a> | <a rel="canonical" href="~~~privacy-policy.html" id="Policy">Privacy</a> | <a rel="canonical" href="~~~/subscribe/" id="Subscribe">Subscribe us</a></p>
                        <span style="color:#1c143b;">v.0.1.2020.12.28</span>
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
    </div>`;
var newContent;
    if(idx==0){
        newContent = content.replace(/~~~/gi, "./");
    }
    else if(idx==1) {
        newContent = content.replace(/~~~/gi, "../");
    }
    else if(idx==2){
        newContent = content.replace(/~~~/gi, "../../");
    }

    document.getElementById("footer").innerHTML = newContent;
}
