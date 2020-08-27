import React from "react"
import ContentCard from "./ContentCard"
import DonatePane from "./DonatePane"
import ScrollSmallCards from "./ScrollSmallCards"
import ScrollLargeCards from "./ScrollLargeCards"
import ModelKits from "./ModelKits"

function Home(props) {
    return(
        <div class="main">

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

            <ModelKits kit={props.ModelKits} />

            {/* Request Model Content Card */}
            <ContentCard title={props.RequestModelCard.title} markdown={props.RequestModelCard.markdown} link_label={props.RequestModelCard.link_label} link={props.RequestModelCard.link}/>
            
            {/* Donate Panel */}
            <DonatePane/>

            {/* Scroll Script */}
            <script src="js/owl.carousel.min.js" type="text/javascript"></script>

            {/* Scroll Sponsors Cards */}
            <ScrollSmallCards title={props.Sponsors.title} cards={props.Sponsors.cards}/>

            {/* Scroll Testiomy Cards */}
            <ScrollLargeCards title={props.Testimonies.title} cards={props.Testimonies.cards} />

        </div>
    )
}


export default Home