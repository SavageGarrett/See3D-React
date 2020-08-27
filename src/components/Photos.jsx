import React, { Component } from "react"
import {useLocation} from "react-router-dom"
let axios = require('axios')

function getNumEntries(link) {
    return new Promise((resolve, reject) => {
        axios.get(link)
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

function getEntries(page) {
    return new Promise((resolve, reject) => {
        axios.get(`http://40.76.54.72:8092/galleries?_start=${(page - 1) * 10}&_limit=10`)
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => {
                reject(err)
            })
    })
    
}

function PhotoBoxes(props) {
    let boxes = []

    let i = 0
    for (let box of props.images) {
        console.log(box)
        boxes.push(
            <div class="col-md-4" key={i}>
                <a class="img-pop-up" aria-label="View Image in Gallery Viewer" href={'http://40.76.54.72:8092' + box.image.url} alt={box.alt_text}>
                    <div class="single-gallery-image" alt={box.alt_text} style={{background: `url('http://40.76.54.72:8092${box.image.url}')`, display: 'block'}}>

                    </div>
                </a>
            </div>
        )
        i++
    }

    return boxes
}

function Pagination(props) {
    return null
}
    

class Photos extends Component {

    state = {
        page: null,
        num_entries: null,
        images: []
    }

    componentDidMount() {
        //const search = useLocation().search;
        //const page = new URLSearchParams(search).get('p');
        const page = 1;

        let num_entries = getNumEntries('http://40.76.54.72:8092/galleries/count')
        let images = getEntries(page)

        Promise.all([num_entries, images])
            .then(values => {
                this.setState({
                    page: page,
                    num_entries: values[0],
                    images: values[1]
                })
            })
            .catch(err => { console.log(err) })
    }

    render() {
        return (
            <div class="popular_catagory_area">
                <div class="container">
                    <div class="row gallery-item">
                        <PhotoBoxes num_entries={ this.state.num_entries } images={ this.state.images } />
                        <Pagination page={this.state.page} num_entries={this.state.num_entries} />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Photos