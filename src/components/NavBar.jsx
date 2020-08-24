import React from "react"
import {Link, Switch}from "react-router-dom"


function NavBar(props) {


    return (

    <div className="navBar">
        <ul>
        <Switch>
            <Link to="/index">Home</Link>
        </Switch>
        <Switch>
            <Link to="/team">Our team</Link>
        </Switch>
        <Switch>
            <Link to="/gallery">Photos</Link>
        </Switch>
        <Switch>
            <Link to="/blog">Blog</Link>
        </Switch>
        <Switch>
            <Link to="/donate">Donate</Link>
        </Switch>
        <Switch>
            <Link to="/contact">Contact</Link>
        </Switch>
        </ul>
    </div>
    )

}


export default NavBar;