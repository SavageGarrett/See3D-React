import React from "react"

function LargeCards(props) {
    let cards = []

    for (let card of props.cards) {
        cards.push(
            <div class="single_carousel">
                <div class="row">
                    <div class="col-lg-11">
                        <div class="single_testmonial d-flex align-items-center">
                            <div class="thumb"><img src={ card.image } alt={ card.alt_text } />
                                <div class="quote_icon"><i class="Flaticon flaticon-quote"></i></div>
                            </div>
                            <div class="info fix-font-20">
                            <p>{ card.testimony_short }</p><a href={ card.link }>Read More...</a><span>{ card.name }</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return cards
}


function ScrollLargeCards(props) {
    
    return(
        <div class="testimonial_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center mb-40">
                            <h3>{props.title}</h3>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="testmonial_active owl-carousel">
                            <LargeCards cards={ props.cards }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollLargeCards