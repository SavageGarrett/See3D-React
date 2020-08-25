import React from "react"
import useScript from '../useScript';

function Footer() {

    useScript('js/vendor/modernizr-3.5.0.min.js', false);
    useScript('js/vendor/jquery-1.12.4.min.js', false);
    useScript('js/popper.min.js', false);
    useScript('js/bootstrap.min.js', false);
    useScript('js/owl.carousel.min.js', false);
    useScript('js/isotope.pkgd.min.js', false);
    useScript('js/waypoints.min.js', false);
    useScript('js/jquery.counterup.min.js', false);
    useScript('js/imagesloaded.pkgd.min.js', false);
    useScript('js/scrollIt.js', false);
    useScript('js/jquery.scrollUp.min.js', false);
    useScript('js/wow.min.js', false);
    useScript('js/nice-select.min.js', false);
    useScript('js/jquery.slicknav.min.js', false);
    useScript('js/jquery.magnific-popup.min.js', false);
    useScript('js/plugins.js', false);
    useScript('js/gijgo.min.js', false);
    useScript('js/jquery.ajaxchimp.min.js', false);
    useScript('js/jquery.form.js', false);
    useScript('js/jquery.validate.min.js', false);
    useScript('js/mail-script.js', false);
    useScript('js/main.js', false);
    useScript('https://www.googletagmanager.com/gtag/js?id=UA-153533872-1', true);
    useScript('js/datalayer.js', false);

    return(
        <footer class="footer">
            <div class="footer_top">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-md-6 col-lg-3">
                            <div class="footer_widget wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div class="footer_logo"><a href="/index"><img src="img/logo.png" alt="white See3D logo"/></a></div>
                                <p>info@see3d.org <br/> Columbus, Ohio</p>
                                <div class="socail_links">
                                    <ul>
                                        <li><a aria-label="see3d facebook page" href="https://www.facebook.com/See3Dprintingfortheblind"><i class="ti-facebook"></i></a></li>
                                        <li><a aria-label="see3d linkedin page" href="https://www.linkedin.com/company/34946156"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a aria-label="see3d twitter page" href="https://twitter.com/See3Dprinting"><i class="fa fa-twitter"></i></a></li>
                                        <li><a aria-label="see3d instagram page" href="https://www.instagram.com/see.3d/"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-6 col-lg-2">
                            <div class="footer_widget wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".4s">
                                <h3 class="footer_title">Company</h3>
                                <ul>
                                    <li><a href="team">Our Team </a></li>
                                    <li><a href="gallery"> Photos</a></li>
                                    <li><a href="blog">Blog</a></li>
                                    <li><a href="contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 col-lg-3">
                            <div class="footer_widget wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".5s">
                                <h3 class="footer_title">Category</h3>
                                <ul>
                                    <li><a href="about">About</a></li>
                                    <li><a href="get_involved">Get Involved</a></li>
                                    <li><a href="request">Request a Model</a></li>
                                    <li><a href="donate">Donate</a></li>
                                </ul>
                            </div>
                        </div>
                        <script src="js/submit_form.js"></script>
                        <div class="col-xl-4 col-md-6 col-lg-4">
                            <div class="footer_widget wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".6s">
                                <h3 class="footer_title">Subscribe</h3>
                                <form class="newsletter_form" id="model_form" action="/subscribe" method="POST"><input class="single-input" aria-label="name input field" type="email" name="email" placeholder="E-Mail" required="" /><button onClick='submit_form()' aria-label="submit button to add to blog mailing list">Subscribe</button></form>
                                <p
                                    class="newsletter_text">Subscribe to our Blog</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copy-right_text wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".3s">
                <div class="container">
                    <div class="footer_border"></div>
                    <div class="row">
                        <div class="col-xl-12">
                            <p class="copy_right text-center">
                                <script>
                                    document.write(new Date().getFullYear());
                                </script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer