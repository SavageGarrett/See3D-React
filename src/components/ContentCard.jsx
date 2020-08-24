import React from "react"
import MarkdownParagraph from "./MarkdownParagraph"


function ContentCard(props) {
    return(
        <div class="fix-bottom popular_catagory_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title mb-40">
                            <h3>{props.title}</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-lg-10">
                        <MarkdownParagraph markdown={props.markdown}/>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <div class="button-offset d-lg-block"><a class="boxed-btn3 bg-fix" href={props.link}>{props.link_label}</a></div>
                </div>
            </div>
        </div>
    )
}

export default ContentCard