import React from "react"
import RegularHeader from "./RegularHeader"

/**
 * Contact Component
 * @param {*} props Component Properties
 */
function Contact(props) {

    const headingName = "Contact"

    return(
        <div>
            <RegularHeader heading={headingName} />

            <section class="contact-section section_padding">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="contact-title">Get in Touch</h2>
                        </div>
                        <div class="col-lg-8">
                            <form class="form-contact contact_form" id="contactForm" action="contact_process" method="post" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group"><textarea class="form-control w-100" id="message" aria-label="Message to send to See3D" name="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter Message"></textarea></div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group"><input class="form-control" id="name" aria-label="Your Name" name="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" /></div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group"><input class="form-control" id="email" aria-label="Your E-Mail" name="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Enter email address" /></div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group"><input class="form-control" id="subject" aria-label="The subject which you are reaching out about" name="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"
                                            /></div>
                                    </div>
                                </div>
                                <div class="form-group mt-3"><a class="genric-btn info" onclick="contact_submit()">Send Message</a></div>
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="media contact-info"><span class="contact-info__icon"><i class="ti-home"></i></span>
                                <div class="media-body">
                                    <h3>The Ohio State University</h3>
                                    <p>Columbus, OH 43210</p>
                                </div>
                            </div>
                            <div class="media contact-info"><span class="contact-info__icon"><i class="ti-email"></i></span>
                                <div class="media-body">
                                    <h3>info@see3d.org</h3>
                                    <p>Feel Free to Reach out Via E-Mail!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Contact