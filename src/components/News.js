import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import InfiniteScroll from 'react-infinite-scroll-component';


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
            page: 1,
            totalResults: 0
        }
        document.title = `M NEUZ | ${this.capatalizeFirstLetter(this.props.category)}`;
    }

    async updateNews() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        this.props.setProgress(40)
        let parsedData = await data.json();
        this.props.setProgress(70)
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: true
        })
        this.props.setProgress(100)

    }
    // this.props.width
    async componentDidMount() {
        this.updateNews();
    }

    handelNextBtn = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }

    handelPrevBtn = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }
    fetchMoreData = async () => {

        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; 
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            article: this.state.article.concat(parsedData.articles),
            totalResults: parsedData.totalResults 
        })


    };
    render() {

        return (
            <>
                {/* <ProgressBar width={this.state.width} /> */}

                <h2 className='text-center mt-4'>M NEUZ - Top {this.capatalizeFirstLetter(this.props.category)} Headlines</h2>
                {/* {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData}
                    // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                    // inverse={true} //
                    hasMore={this.state.article.length !== this.state.totalResults}
                    loader={<Spinner />}
                // scrollableTarget="scrollableDiv"
                >
                    <div className="container">

                        <div className="row my-3">
                            {this.state.article.map((e) => {
                                return <div className="col-md-4" key={e.url}>
                                    <NewsItem mainS={this.props.sourceC} title={e.title ? e.title.slice(0, 45) : ""} newsUrl={e.url} imgUrl={e.urlToImage} description={e.description ? e.description.slice(0, 80) : ""} author={e.author} date={e.publishedAt} source={e.source.name} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className='d-flex justify-content-between'>

                        <button disabled={this.state.page <= 1} onClick={this.handelPrevBtn} className='btn btn-primary'>&larr; Previous</button>

                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handelNextBtn} className='btn btn-primary'>Next &rarr;</button>
                    </div> */}
            </>
        )
    }
}

export default News