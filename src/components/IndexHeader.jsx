import React from "react"
import NavBar from "./NavBar";

function HeaderArea() {
    return(
    <header>    
    <div class="header-area">
        <div class="main-header-area" id="sticky-header">
            <div class="container-fluid">
                <div class="header_bottom_border">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-lg-2">
                            <div class="logo">
                                <a href="index">
                                    <img src="img/logo.png" alt="See3D Logo: The words See3D in blue being 3D printed. The black extruder hangs from a grey bar and extrudes blue filament that snakes down to the top of the letter D since See3D has finished printing."/></a>
                            </div>
                        </div>
                        <NavBar/>
                        <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                            <div class="Appointment">

                            <div class="d-none d-lg-block"><a class="boxed-btn3" href="request_info">Request a Model</a></div>
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
);
}


export default HeaderArea;