import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import NavBar from "./NavBar"
import Photos from "./Photos"
import Blog from "./Blog"
import Donate from "./Donate"
import Contact from "./Contact"
import Home from "./Home"
import Team from "./Team"






function App() {
    return(
    <div>
        <Router>
            <NavBar/>
        <Switch>
            <Route path="/index" component={Home}>
             <Home/>
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

    </div>

        

    );
}

export default App;