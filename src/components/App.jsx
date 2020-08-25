import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import NavBar from "./NavBar"
import Photos from "./Photos"
import Blog from "./Blog"
import Donate from "./Donate"
import Contact from "./Contact"
import Home from "./Home"
import Team from "./Team"
import Footer from "./Footer"

/* State Data */
let HomePage = {
    AboutCard: {
        title: "About Our Project",
        markdown: `See3D organizes the printing and distribution of 3D printed models for people who are blind. Anyone who is blind/has low vision, or is a parent or teacher of someone who is blind, can make a request for a model.\
            If you would like to support our mission, you can donate [Here](/donate "Here").`,
        link_label: "More Info",
        link: "/about"
    },
    GetInvolvedCard: {
        title: "Get Involved!",
        markdown: `Anybody with a 3D printer, old 3D prints, or 3D modeling skills can help See3D. Click below for more Information.`,
        link_label: "More Info",
        link: "/get_involved"
    },
    RequestModelCard: {
        title: "Request a Model",
        markdown: `If you would like to request a model, click the button below to start the process of requesting a model.`,
        link_label: "Request a Model",
        link: "/request_info"
    },
    Sponsors: {
        title: "Sponsors and Donors",
        cards: [
            {
                title: "The OSU Innovation Studio",
                link: "https://go.osu.edu/innovationstudio",
                image: "img/sponsors/innovation.png",
                alt_text: "The Ohio State University Innovation Studio logo"
            },
            {
                title: "GE Additive Education",
                link: "https://www.ge.com/additive/stories/ge-additive-education-program-0",
                image: "img/sponsors/ge.png",
                alt_text: "General Electric additive education program logo"
            },
            {
                title: "IC3D Printers",
                link: "https://ic3dprinters.com/",
                image: "img/sponsors/ic3d.png",
                alt_text: "IC3D Printers logo",
                second_line: "-"
            },
            {
                title: "Jane Goodall's Roots and Shoots",
                link: "https://janegoodall.org/our-work/our-approach/roots-shoots/",
                image: "img/sponsors/goodall.png",
                alt_text: "Jane goodall roots and shoots logo"
            },
            {
                title: "Vora Ventures",
                link: "https://www.voraventures.com/",
                image: "img/sponsors/vora.png",
                alt_text: "Vora Ventures logo",
                second_line: "-"
            },
            {
                title: "GeckoTek",
                link: "https://www.geckotek.co/",
                image: "img/sponsors/geckotek.png",
                alt_text: "GeckoTek logo",
                second_line: "-"
            },
        ]
    },
    Testimonies: {
        title: "Testimonials",
        cards: [
            {
                testimony_short: "I had a vague idea what a castle looked like in terms of the base. The top and towers were completely new to me; I'd always heard of towers and castles but didn't imagine the towers were a part of the castle.",
                link: "/testimony?q=karen_arcos",
                name: "- Karen Arcos",
                image: "img/testimonial/karen_arcos.png",
                alt_text: "Karen Arcos"
            },
            {
                testimony_short: "This is a great organization, and I continue to promote it to other blind/visually impaired individuals to use as a source for learning tactilely.",
                link: "/testimony?q=rachel_hage",
                name: "- Rachel Hage",
                image: "img/testimonial/rachel_hage.png",
                alt_text: "Rachel Hage"
            },
            {
                testimony_short: "See3D has been a wonderful and valuable resource for my students who are blind and visually impaired. They absolutely love the tactual models of their favorite movie characters such as R2D2 from Star Wars and the Minions.",
                link: "/testimony?q=michelle_quinn",
                name: "- Michelle Quinn",
                image: "img/testimonial/michelle_quinn.png",
                alt_text: "Snowflake 3D models made for michelle quinn"
            },
            {
                testimony_short: "These weird shapes are fascinating and I find myself exploring the model while my brain is busy doing its thing. Thanks Caroline, all you other volunteers and those who contribute financially to this project. Veryhelpful and enlightening.",
                link: "/testimony?q=winslow_parker",
                name: "- Winslow Parker",
                image: "img/testimonial/winslow_parker.png",
                alt_text: "Klein bottle 3d models made for winslow parker"
            }
        ]
    },
    ModelKits: {
        title: "Model Kits",
        description: "See3D now offers educational model kits that walk you through the model piece by piece. If you would like to request a model kit indicate that in the model description on the request form.",
        kits: [
            {
                title: "United States Kit",
                image: "img/thingiverse/united-states-kit.jpg",
                alt_text: "Statue of Liberty 3D Model",
                link: "/model_kit?q=united-states-kit",
                models: [
                    {
                        title: "United States Model Kit",
                        paragraph: "A collection of models containing famous buildings, landmarks, geography, and the United States flag."
                    },
                    {
                        title: "American Flag Model",
                        title_link: "https://www.thingiverse.com/thing:910845",
                        learning_guide: "Learning Guide",
                        learning_link: "documents/kits/united-states-kit/American%20Flag.docx",
                        image: "/img/kits/united-states-kit/usa_flag_1_preview_card.jpg",
                        alt_text: "United States Flag 3D Model"
                    },
                    {
                        title: "Statue of Liberty Model",
                        title_link: "https://www.thingiverse.com/thing:65869",
                        learning_guide: "Learning Guide",
                        learning_link: "documents/kits/united-states-kit/Statue%20of%20Liberty_.docx",
                        image: "/img/kits/united-states-kit/liberty2_fixed_preview_card.jpg",
                        alt_text: "Statue of Liberty 3D Model"
                    },
                    {
                        title: "Capitol Building 3D Model",
                        title_link: "https://www.thingiverse.com/thing:461272",
                        learning_guide: "Learning Guide",
                        learning_link: "documents/kits/united-states-kit/Capitol%20Building_.docx",
                        image: "/img/kits/united-states-kit/CAPITOL_DISPLAY_preview_card.jpg",
                        alt_text: "Capitol Building 3D Model"
                    },
                    {
                        title: "White House Model",
                        title_link: "https://www.thingiverse.com/thing:461235",
                        learning_guide: "Learning Guide",
                        learning_link: "documents/kits/united-states-kit/The%20White%20House_.docx",
                        image: "/img/kits/united-states-kit/WHITE_HOUSE_DISPLAY_preview_card.jpg",
                        alt_text: "White House 3D Model"
                    },
                    {
                        title: "Topographic Model",
                        title_link: "https://www.thingiverse.com/thing:634007",
                        learning_guide: "Learning Guide",
                        learning_link: "documents/kits/united-states-kit/American%20Flag.docx",
                        image: "/img/kits/united-states-kit/IMG_4465_preview_card.jpg",
                        alt_text: "Topographic Map of USA 3D Model"
                    }
                ]

            }, 
            {
                title: "Anatomy Kit",
                image: "img/thingiverse/anatomy-kit.jpg",
                alt_text: "Human Intestines 3D Model",
                link: "/model_kit?q=anatomy-kit",
                models: [
                    {

                    },
                    {
                        
                    }
                ]
            }
        ]
    }
}


function App() {
    return(
    <div>
        {/* NavBar and Page Body */}
        <Router>
            <NavBar/>
        <Switch>
            <Route path="/index" component={Home}>
                <Home {...HomePage} ></Home>
            </Route>
            <Route path="/team" component={Team}>
                <Team/>
            </Route>
            <Route path="/gallery" component={Photos}>
                <Photos/>
            </Route>
            <Route path="/blog" component={Blog}>
                <Blog/>
            </Route>
            <Route path="/donate" component={Donate}>
                <Donate/>
            </Route>
            <Route path="/contact" component={Donate}>
                <Contact/>
            </Route>
        </Switch>
        </Router>

        {/* Page Footer */}
        <Footer></Footer>
    </div>

        

    );
}

export default App;