import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'

export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: "12",
        category: "general"
        // width: "0%"
    }
    capatalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            article: [],
            loading: false,
            page: 1
        }
        document.title = `M NEUZ | ${this.capatalizeFirstLetter(this.props.category)}`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b0fb2ffe1b84d84ac011978578acce7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }
    // this.props.width
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b0fb2ffe1b84d84ac011978578acce7&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        // console.log(this.state.width);
        // .then(response => response.text())
        // .then(data => console.log(JSON.parse(data)[0]));
    }
    // nextPG = () => {
    //     this.setState
    // }

    handelNextBtn = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     // console.log("Page + 1 > totalResults / 20");
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b0fb2ffe1b84d84ac011978578acce7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({
        //         loading: true
        //     })
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         article: parsedData.articles,
        //         page: this.state.page + 1,
        //         loading: false
        //     })
        // }
        // else {
        // }
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }

    handelPrevBtn = async () => {

        // this.setState({})
        // console.log("Previus: " + this.page);
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b0fb2ffe1b84d84ac011978578acce7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     article: parsedData.articles,
        //     page: this.state.page - 1
        // })
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }
    render() {

        return (
            <>
                {/* <ProgressBar width={this.state.width} /> */}
                <div className='container my-4'>

                    <h2 className='text-center'>M NEUZ - Top {this.capatalizeFirstLetter(this.props.category)} Headlines</h2>
                    {this.state.loading && <Spinner />}
                    {/* <Spinner/> */}
                    <div className="row my-3">
                        {!this.state.loading && this.state.article.map((e) => {
                            return <div className="col-md-4" key={e.url}>
                                <NewsItem mainS={this.props.sourceC} title={e.title ? e.title.slice(0, 45) : ""} newsUrl={e.url} imgUrl={e.urlToImage} description={e.description ? e.description.slice(0, 80) : ""} author={e.author} date={e.publishedAt} source={e.source.name} />
                            </div>
                        })}


                    </div>
                    <div className='d-flex justify-content-between'>

                        <button disabled={this.state.page <= 1} onClick={this.handelPrevBtn} className='btn btn-primary'>&larr; Previous</button>

                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handelNextBtn} className='btn btn-primary'>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News