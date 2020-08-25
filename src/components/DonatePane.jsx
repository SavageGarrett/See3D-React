import React from "react"


function DonatePane() {
    return(
        <div class="marg-top job_searcing_wrap overlay pad-top">
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
    )
}

export default DonatePane