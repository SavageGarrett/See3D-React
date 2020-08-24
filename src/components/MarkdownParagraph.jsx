import React from "react"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

// Markdown to Html Converter Library
var showdown = require('showdown'),
    converter = new showdown.Converter();

/**
 * Converts markdown to html
 * @param {String} markdown Markdown string to convert
 * @returns {String} Converted Html
 */
function markdown2html(markdown) {
    return converter.makeHtml(markdown)
}

function MarkdownParagraph(props) {
    return(
        <div class="markdown-paragraph">
            { ReactHtmlParser(markdown2html(props.markdown)) }
        </div>
    )
}

export default MarkdownParagraph