import React from "react"
import RegularHeader from "./RegularHeader"

/**
 * Team Page Component
 */
function Team() {

    const headingName = "Team"

    return (
        <div>
            <RegularHeader heading={headingName}/>
            <link rel="stylesheet" href="css/team.css"/>
            <div class="testimonial_area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-lg-11">
                                    <div class="single_testmonial d-flex align-items-center">
                                        <div class="thumb"><img src="img/team/caroline.png" alt="caroline karbowski head shot" />
                                            <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                        </div>
                                        <div class="info">
                                            <h2>Caroline Karbowski - CEO and Founder</h2><span>Biology Major at The Ohio State University</span>
                                            <div class="footer footer-rst">
                                                <div class="socail_links" style={{marginTop: '20px'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11">
                                    <div class="single_testmonial d-flex align-items-center">
                                        <div class="thumb"><img src="img/team/emily.png" alt="emily kiehl head shot" />
                                            <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                        </div>
                                        <div class="info">
                                            <h2>Emily Kiehl - Board Member</h2><span>Information Technology and MBA at University of Cincinnati</span>
                                            <div class="footer footer-rst">
                                                <div class="socail_links" style={{marginTop: '20px'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11">
                                    <div class="single_testmonial d-flex align-items-center">
                                        <div class="thumb"><img src="img/team/garrett.png" alt="garrett carder head shot" />
                                            <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                        </div>
                                        <div class="info">
                                            <h2>Garrett Carder - CTO and Board Member</h2><span>Computer Science Major at The Ohio State University</span>
                                            <div class="footer footer-rst">
                                                <div class="socail_links" style={{marginTop: '20px'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11">
                                    <div class="single_testmonial d-flex align-items-center">
                                        <div class="thumb"><img src="img/team/enan.png" alt="enan srivastava head shot" />
                                            <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                        </div>
                                        <div class="info">
                                            <h2>Enan Srivastava - Head of Strategy and Operations</h2><span>Economics Major and Computer Science Minor at The Ohio State University</span>
                                            <div class="footer footer-rst">
                                                <div class="socail_links" style={{marginTop: '20px'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11">
                                    <div class="single_testmonial d-flex align-items-center">
                                        <div class="thumb"><img src="img/team/kara.png" alt="kara herzog head shot" />
                                            <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                        </div>
                                        <div class="info">
                                            <h2>Kara Herzog - Marketing Team</h2><span>Marketing Major at The Ohio State University</span>
                                            <div class="footer footer-rst">
                                                <div class="socail_links" style={{marginTop: '20px'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11">
                                    <div class="single_testmonial d-flex align-items-center">
                                        <div class="thumb"><img src="img/team/nupur.png" alt="nupur malhotra head shot" />
                                            <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                        </div>
                                        <div class="info">
                                            <h2>Nupur Malhotra - Marketing Team</h2><span>Operations Management Major and Psychology Minor at The Ohio State University</span>
                                            <div class="footer footer-rst">
                                                <div class="socail_links" style={{marginTop: '20px'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11">
                                    <div class="single_testmonial d-flex align-items-center">
                                        <div class="thumb"><img src="img/team/patrick.png" alt="patrick smith head shot" />
                                            <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                        </div>
                                        <div class="info">
                                            <h2>Patrick Smith - Marketing Team</h2><span>Data Analytics Major at The Ohio State University</span>
                                            <div class="footer footer-rst">
                                                <div class="socail_links" style={{marginTop: '20px'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}


export default Team;