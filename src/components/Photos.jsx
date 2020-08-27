import React, { Component } from "react"
import { withRouter } from "react-router-dom"
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

//TODO
function Pagination(props) {
    let prev_arrow_display = 'none', next_arrow_display = 'none';
    

    return (
        null
        // <nav class="blog-pagination justify-content-center d-flex" style="margin-bottom: 40px;">
        //     <ul class="pagination">
        //         <li class="page-item" style="display: none;"><a class="page-link" href="gallery.html?p=1" aria-label="Previous"><i class="ti-angle-left"></i></a></li>
        //         <li class="page-item active"><a class="page-link" href="gallery.html?p=1"></a></li>
        //         <li class="page-item active"><a class="page-link" href="gallery.html?p=1"></a></li>
        //         <li class="page-item active"><a class="page-link" href="gallery.html?p=1"></a></li>
        //         <li class="page-item" style="display: block;"><a class="page-link" href="gallery.html?p=1" aria-label="Next"><i class="ti-angle-right"></i></a></li>
        //     </ul>
        // </nav>
    )
}
    

class Photos extends Component {

    state = {
        page: 1,
        num_entries: null,
        images: []
    }

    componentDidMount() {
        let page = 1;

        if (this.props.location.hasOwnProperty('search')) {
            const params = new URLSearchParams(this.props.location.search)
            
            if (params.get('p') != void 0 && !isNaN(params.get('p'))) page = params.get('p')
        }

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

export default withRouter(Photos)