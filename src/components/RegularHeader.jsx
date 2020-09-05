import React from "react"
import NavBar from "./NavBar"






function RegularHeader(props) {

   

    

return(
    <body>
    <header>
    <div class="header-area">
            <div class="main-header-area" id="sticky-header">
                <div class="container-fluid">
                    <div class="header_bottom_border">
                        <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-2">
                                <div class="logo"><a href="index"><img src="img/logo.png" alt="White See3D logo"/></a></div>
                            </div>
                           <NavBar/>
                            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div class="Appointment">
                                    <div class="d-none d-lg-block"><a class="boxed-btn3" href="request">Request a Model</a></div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </header>
    <div class="bradcam_area bradcam_bg_1">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="bradcam_text">
                        <h3>{props.heading}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body> 

);


}

export default RegularHeader;