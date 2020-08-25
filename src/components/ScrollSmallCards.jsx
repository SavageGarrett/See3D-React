import React from "react"

function SmallCards(props) {
    // Define Return array of Elements
    const cards = []

    // Loop through all cards
    for (let card of props.cards) {
        // Check if card has a second line of text
        if (card.hasOwnProperty('second_line')) {
            // Push Card with Two Text Lines
            cards.push(
                <div class="single_candidates text-center">
                    <div class="thumb">
                        <img src={card.image} alt={card.alt_text} />
                    </div>
                    <a href={card.link}>
                        <h4>{card.title}</h4>
                    </a>
                    <p>{card.second_line}</p>
                </div>
            )
        } else {
            // Push Card with One Text Line
            cards.push(
                <div class="single_candidates text-center">
                    <div class="thumb">
                        <img src={card.image} alt={card.alt_text} />
                    </div>
                    <a href={card.link}>
                        <h4>{card.title}</h4>
                    </a>
                </div>
            )
        }
        
    }

    // Return array of Small Cards
    return(cards)
}


function ScrollSmallCards(props) {
    // Return Small Card Scroll Area
    return(
        <div class="pad-top fix-bottom featured_candidates_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center mb-40">
                            <h3>{props.title}</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="candidate_active owl-carousel">
                            <SmallCards cards={ props.cards }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollSmallCards