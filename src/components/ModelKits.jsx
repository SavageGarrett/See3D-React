import React from "react"

function ModelKit(props) {
    console.log(props)
    let model_kits = []

    for (let kit of props.kits) {
        model_kits.push(
            <div class="col-lg-4 col-xl-3 col-md-6">
                <div class="single_catagory">
                    <a href={ kit.link }>
                        <h4>{ kit.title }</h4>
                    </a><img src={ kit.image } alt={ kit.alt_text } />
                    {/* <p> <span>50</span> Available position</p> */}
                </div>
            </div>
        )
    }

    return model_kits
}


function ModelKits(props) {
    return(
        <div class="pad-top fix-bottom popular_catagory_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title mb-40">
                            <h3>{ props.kit.title }</h3>
                        </div>
                        <p class="fix-font-20 marg-30-bottom">{ props.kit.description }</p>
                    </div>
                </div>
                <div class="row">
                    <ModelKit kits={ props.kit.kits }/>
                </div>
            </div>
        </div>
    )
}

export default ModelKits