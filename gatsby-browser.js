/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/assets/css/main.css';
import './src/assets/css/responsive.css';
import './src/assets/css/responsive-2.css';
import './src/assets/fonts/themify/themify.css';

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/popper.min'

const $ = require("jquery")

export const onInitialClientRender = () => {    
    $(document).ready(function () {
        // alert('Hello');
        // setTimeout($('#preloader').hide(), 1000);
        /*-------------------------------------------------------------------------------
	     Navbar 
	    -------------------------------------------------------------------------------*/ 
        function navbarFixed() {
            if ($('.header_area').length) {
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();
                    if (scroll) {
                        $(".header_area").addClass("navbar_fixed");
                    } else {
                        $(".header_area").removeClass("navbar_fixed");
                    }
                });
            };
        };
        navbarFixed();


        function offcanvasActivator() {
            if ($('.bar_menu').length) {
                $('.bar_menu').on('click', function () {
                    $('#menu').toggleClass('show-menu')
                });
                $('.close_icon').on('click', function () {
                    $('#menu').removeClass('show-menu')
                })
            }
        }
        offcanvasActivator();

        // $('.offcanfas_menu .dropdown').on('show.bs.dropdown', function (e) {
        //     $(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
        // });
        // $('.offcanfas_menu .dropdown').on('hide.bs.dropdown', function (e) {
        //     $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
        // });

        /*-------------------------------------------------------------------------------
        mCustomScrollbar js
        -------------------------------------------------------------------------------*/
        $(window).on("load", function () {
            if ($('.mega_menu_two .scroll').length) {
                $(".mega_menu_two .scroll").mCustomScrollbar({
                    mouseWheelPixels: 50,
                    scrollInertia: 0,
                });
            }
        });
        
         /*-------------------------------------------------------------------------------
            hamberger menu
            -------------------------------------------------------------------------------*/
            function hamberger_menu() {
                if ($('.burger_menu').length) {
                    $('.burger_menu').on('click', function () {
                        $(this).toggleClass('open')
                        $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
                    });
                    $('.close, .click-capture').on('click', function () {
                        $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
                    });
                }
            }
            hamberger_menu();

            // Start of Tawk.to Script
            function TalkAPILoad(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/5e84287069e9320caabf156c/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
            }
            // End of Tawk.to Script
        TalkAPILoad();     
        
    });

    /*-------------------------------------------------------------------------------
    preloader js
    -------------------------------------------------------------------------------*/
    function loader() {
        setTimeout(()=>{
            $('#ctn-preloader').addClass('loaded');
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        },1000);
        // $(window).on('load', function () {
            
        // });
    }
    
  }
