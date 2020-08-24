// Markdown to Html Converter Library
var showdown = require('showdown'),
    converter = new showdown.Converter();

/**
 * Converts markdown to html
 * @param {String} markdown Markdown string to convert
 * @returns {String} Converted Html
 */
export function markdown2html(markdown) {
    return converter.makeHtml(markdown)
}