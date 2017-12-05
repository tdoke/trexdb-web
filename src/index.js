import "./css/font_lato.css";
import "./css/grid.css";
import "./css/normalize.css";
import "./css/animate.css";
import "./css/main.css";
import "./css/queries.css";

import $ from "jquery";
import "../node_modules/waypoints/lib/noframework.waypoints";


$(document).ready(function () {
    
    
    // hero text box fadeIn	
    $(window).focus(function () {
        $('.js--hero-text-para').addClass('animated fadeInUp');
        $('.js--hero-text-box').addClass('animated fadeInUp');
        $('.js--hero-text-para').removeClass('hidden');
        $('.js--hero-text-box').removeClass('hidden');
    });

    $(window).blur(function () {
        $('.js--hero-text-para').addClass('hidden');
        $('.js--hero-text-box').addClass('hidden');
    });

    const stickyNavWaypoint = new Waypoint({
        element: document.getElementById("customers"),
        handler: function(direction) {
        direction === 'down' ? $('nav').addClass('sticky') : $('nav').removeClass('sticky');  
        },
        offset: '-50px' 
      });

      const anaylstReportCardWaypoint = new Waypoint({
        element: document.getElementById("js--card-analyst-report"),
        handler: function(direction) {
            $('#js--card-analyst-report').addClass('animated pulse');
        },
        offset: '50%' 
      });

    $('.reachout-links-image-webinar').hide();
    $('.reachout-links-image-usergroup').hide();
    $('.reachout-links-image-university').hide();


    $('.js--events--a').click(function () {
        $('.selected-link').removeClass('selected-link');
        $('.js--events--parent').addClass('selected-link');

        $('.js--reachout-selected-img').hide();
        $('.js--reachout-selected-img').removeClass('js--reachout-selected-img');
        $('.reachout-links-image-event').addClass('js--reachout-selected-img animated pulse');
        $('.reachout-links-image-event').show();
    });

    $('.js--webinars--a').click(function () {
        $('.selected-link').removeClass('selected-link');
        $('.js--webinars--parent').addClass('selected-link');

        $('.js--reachout-selected-img').hide();
        $('.js--reachout-selected-img').removeClass('js--reachout-selected-img');
        $('.reachout-links-image-webinar').addClass('js--reachout-selected-img animated pulse');
        $('.reachout-links-image-webinar').show();

    });

    $('.js--usergroups--a').click(function () {
        $('.selected-link').removeClass('selected-link');
        $('.js--usergroups--parent').addClass('selected-link');

        $('.js--reachout-selected-img').hide();
        $('.js--reachout-selected-img').removeClass('js--reachout-selected-img');
        $('.reachout-links-image-usergroup').addClass('js--reachout-selected-img animated pulse');
        $('.reachout-links-image-usergroup').show();
    });

    $('.js--university--a').click(function () {
        $('.selected-link').removeClass('selected-link');
        $('.js--university--parent').addClass('selected-link');

        $('.js--reachout-selected-img').hide();
        $('.js--reachout-selected-img').removeClass('js--reachout-selected-img');
        $('.reachout-links-image-university').addClass('js--reachout-selected-img animated pulse');
        $('.reachout-links-image-university').show();
    });


    $('.js--nav-mob-btn-open').click(function () {
        $('.js--nav-list').addClass('nav-list-mob');
        $('.js--nav-list').show();

        $('.js--nav-mob-btn-open').hide();
        $('.js--nav-mob-btn-close').show();
    });

    $('.js--nav-mob-btn-close').click(function () {
        $('.js--nav-list').removeClass('nav-list-mob');
        $('.js--nav-list').hide();

        $('.js--nav-mob-btn-open').show();
        $('.js--nav-mob-btn-close').hide();
    });


    /* products */
    $('.product-info').hide();
    $('.js--product-selected').show();

    $('.js--product-enterprise-advanced-btn').click(function () {
        showSelectedProductInfo('js--product-info-enterprise-advanced');
        changeSelectedProductButton('js--product-enterprise-advanced-btn');
    });

    $('.js--product-professional-btn').click(function () {
        showSelectedProductInfo('js--product-info-professional');
        changeSelectedProductButton('js--product-professional-btn');
    });

    $('.js--product-stitch-btn').click(function () {
        showSelectedProductInfo('js--product-info-stitch');
        changeSelectedProductButton('js--product-stitch-btn');
    });

    $('.js--product-atlas-btn').click(function () {
        showSelectedProductInfo('js--product-info-atlas');
        changeSelectedProductButton('js--product-atlas-btn');
    });

    $('.js--product-cloud-manager-btn').click(function () {
        showSelectedProductInfo('js--product-info-cloud-manager');
        changeSelectedProductButton('js--product-cloud-manager-btn');
    });

    function showSelectedProductInfo(productName) {
        $('.js--product-selected').hide();
        $('.js--product-selected').removeClass('js--product-selected');
        $('.' + productName).addClass('js--product-selected');
        $('.js--product-selected').show();
    }

    function changeSelectedProductButton(productBtnName) {
        $('.btn-grey-default-select').removeClass('btn-grey-default-select');
        $('.' + productBtnName).addClass('btn-grey-default-select');
    }



    // smooth scrolling
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});