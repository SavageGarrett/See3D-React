import React from "react"
import ContentCard from "./ContentCard"

function Home(props) {
    console.log(props)
    return(
        <div>
        <div class="slider_area">
            <div class="single_slider d-flex align-items-center slider_bg_1">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-md-6">
                            <div class="slider_text">
                                <h3 class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">See3D</h3>
                                <p class="tagline-addin wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">A non-profit organization that manages the printing and distribution of 3D printed models for people who are blind.</p>
                                <div class="sldier_btn wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s"><a class="boxed-btn3" href="donate">Support Our Mission</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ilstration_img wow fadeInRight d-none d-lg-block text-right" data-wow-duration="1s" data-wow-delay=".2s"><img src="img/banner/illustration.png" alt="blue see3d logo" /></div>
        </div>

        {/* About Content Card */}
        <ContentCard title={props.AboutCard.title} markdown={props.AboutCard.markdown} link_label={props.AboutCard.link_label} link={props.AboutCard.link}/>

        {/* Get Involved Content Card */}
        <ContentCard title={props.GetInvolvedCard.title} markdown={props.GetInvolvedCard.markdown} link_label={props.GetInvolvedCard.link_label} link={props.GetInvolvedCard.link}/>

        <div class="fix-bottom popular_catagory_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title mb-40">
                            <h3>Model Kits</h3>
                        </div>
                        <p class="fix-font-20 marg-30-bottom">See3D now offers educational model kits that walk you through the model piece by piece. If you would like to request a model kit indicate that in the model description on the request form.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-xl-3 col-md-6">
                        <div class="single_catagory">
                            <a href="/index?model_kit=united-states-kit">
                                <h4>United States Kit</h4>
                            </a><img src="img/thingiverse/united-states-kit.jpg" alt="State of Liberty 3D Model" />
                            {/* <p> <span>50</span> Available position</p> */}
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-3 col-md-6">
                        <div class="single_catagory">
                            <a href="/index?model_kit=anatomy-kit">
                                <h4>Anatomy Kit</h4>
                            </a><img src="img/thingiverse/anatomy-kit.jpg" alt="Intestine 3D Model" />
                            {/* <p> <span>50</span> Available position</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Request Model Content Card */}
        <ContentCard title={props.RequestModelCard.title} markdown={props.RequestModelCard.markdown} link_label={props.RequestModelCard.link_label} link={props.RequestModelCard.link}/>
        
        <div class="job_searcing_wrap overlay">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 offset-lg-1 col-md-6">
                        <div class="searching_text">
                            <h3>Donate to See3D</h3>
                            <p>Click Below to Support us Financially</p><a class="boxed-btn3" href="donate">Donate</a></div>
                    </div>
                    <div class="col-lg-5 offset-lg-1 col-md-6">
                        <div class="searching_text">
                            <h3>In-Kind Donations</h3>
                            <p>We also accept in-kind donations of 3D printing supplies and some other blindness related items.</p><a class="boxed-btn3" href="get_involved">More Info</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pad-top fix-bottom featured_candidates_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center mb-40">
                            <h3>Sponsors and Donors</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="candidate_active owl-carousel">
                            <div class="single_candidates text-center">
                                <div class="thumb"><img src="img/sponsors/innovation.png" alt="The Ohio State University Innovation Studio logo" /></div>
                                <a href="https://go.osu.edu/innovationstudio">
                                    <h4>The OSU Innovation Studio</h4>
                                </a>
                                {/* <p>Software Engineer</p> */}
                            </div>
                            <div class="single_candidates text-center">
                                <div class="thumb"><img src="img/sponsors/ge.png" alt="General Electric additive education program logo" /></div>
                                <a href="https://www.ge.com/additive/stories/ge-additive-education-program-0">
                                    <h4>GE Additive Education</h4>
                                </a>
                                {/* <p>Software Engineer</p> */}
                            </div>
                            <div class="single_candidates text-center">
                                <div class="thumb"><img src="img/sponsors/ic3d.png" alt="IC3D Printers logo" /></div>
                                <a href="https://ic3dprinters.com/">
                                    <h4>IC3D Printers</h4>
                                </a>
                                <p>-</p>
                            </div>
                            <div class="single_candidates text-center">
                                <div class="thumb"><img src="img/sponsors/goodall.png" alt="Jane goodall roots and shoots logo" /></div>
                                <a href="https://janegoodall.org/our-work/our-approach/roots-shoots/">
                                    <h4>Jane Goodall's Roots and Shoots</h4>
                                </a>
                                {/* <p>Software Engineer</p> */}
                            </div>
                            <div class="single_candidates text-center">
                                <div class="thumb"><img src="img/sponsors/vora.png" alt="Vora Ventures logo" /></div>
                                <a href="https://www.voraventures.com/">
                                    <h4>Vora Ventures</h4>
                                </a>
                                <p>-</p>
                            </div>
                            <div class="single_candidates text-center">
                                <div class="thumb"><img src="img/sponsors/geckotek.png" alt="GeckoTek logo" /></div>
                                <a href="https://www.geckotek.co/">
                                    <h4>GeckoTek</h4>
                                </a>
                                <p>-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* testimonial_area */}
        <div class="testimonial_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center mb-40">
                            <h3>Testimonials</h3>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="testmonial_active owl-carousel">
                            <div class="single_carousel">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <div class="single_testmonial d-flex align-items-center">
                                            <div class="thumb"><img src="img/testimonial/karen_arcos.png" alt="Karen Arcos" />
                                                <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                            </div>
                                            <div class="info fix-font-20">
                                                <p>"I had a vague idea what a castle looked like in terms of the base. The top and towers were completely new to me; I'd always heard of towers and castles but didn't imagine the towers were a part of the castle."</p>
                                                <a class="text-link" href="/index?testimony=karen_arcos">Read More... </a><span>- Karen Arcos</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single_carousel">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <div class="single_testmonial d-flex align-items-center">
                                            <div class="thumb"><img src="img/testimonial/rachel_hage.png" alt="Rachel Hage" />
                                                <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                            </div>
                                            <div class="info fix-font-20">
                                                <p>"This is a great organization, and I continue to promote it to other blind/visually impaired individuals to use as a source for learning tactilely."</p><a href="?testimony=rachel_hage">Read More...</a><span>- Rachel Hage</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single_carousel">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <div class="single_testmonial d-flex align-items-center">
                                            <div class="thumb"><img src="img/testimonial/michelle_quinn.png" alt="Snowflake 3D models made for michelle quinn" />
                                                <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                            </div>
                                            <div class="info fix-font-20">
                                                <p>"See3D has been a wonderful and valuable resource for my students who are blind and visually impaired. They absolutely love the tactual models of their favorite movie characters such as R2D2 from Star Wars and the
                                                    Minions."</p><a href="?testimony=michelle_quinn">Read More...</a><span>- Michelle Quinn</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single_carousel">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <div class="single_testmonial d-flex align-items-center">
                                            <div class="thumb"><img src="img/testimonial/winslow_parker.png" alt="Klein bottle 3d models made for winslow parker" />
                                                <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                                            </div>
                                            <div class="info fix-font-20">
                                                <p>"These weird shapes are fascinating and I find myself exploring the model while my brain is busy doing its thing. Thanks Caroline, all you other volunteers and those who contribute financially to this project. Very
                                                    helpful and enlightening."</p><a href="?testimony=winslow_parker">Read More...</a><span>- Winslow Parker</span></div>
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


export default Home