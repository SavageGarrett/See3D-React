import React from "react"
import {Link, Switch}from "react-router-dom"


function NavBar() {


    return (

        <div class="col-xl-6 col-lg-7">
                <div class="main-menu d-none d-lg-block">
                        <nav>
                            <ul id="navigation">
                            <Switch>
                                <Link to="/index" exact>
                                    <li>
                                    <a>Home</a>
                                    </li>
                                   
                                </Link>       
                            </Switch>
                            <Switch>
                                 <Link to="/team">
                                    <li>
                                     <a>Our team</a>
                                    </li>
                                     
                                </Link>
                            </Switch>
                             <Switch>
                                 <Link to="/gallery">
                                     <li>
                                        <a>Photos</a>
                                     </li>
                                     
                                </Link>
                             </Switch>
                             <Switch>
                                 <Link to="/blog">
                                     <li>
                                        <a>Blog</a>
                                     </li>
                                </Link>
                            </Switch>
                            <Switch>
                                <Link to="/donate">
                                    <li>
                                        <a>Donate</a>
                                    </li>
                                </Link>
                            </Switch>
                            <Switch>
                                 <Link to="/contact">
                                     <li>
                                        <a>Contact</a>
                                     </li>
                                </Link>
                            </Switch>
                        </ul>
                    </nav>
                </div>
            </div>

    );

}


export default NavBar;