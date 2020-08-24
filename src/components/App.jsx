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

/* State Data+ */
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