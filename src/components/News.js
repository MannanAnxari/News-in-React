import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `M NEUZ | ${this.capatalizeFirstLetter(props.category)}`;


    const capatalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40)
        let parsedData = await data.json();
        props.setProgress(70)
        setArticle(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(true)
        props.setProgress(100)

    }


    useEffect(() => {
        updateNews();

    }, [])


    const handelNextBtn = async () => {
        setPage(page + 1)
        updateNews();
    }

    const handelPrevBtn = async () => {
        setPage(page - 1)
        updateNews();
    }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticle(article.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)


    };

    return (
        <>
            {/* <ProgressBar width={this.state.width} /> */}

            <h2 className='text-center' style={{marginTop: "7%"}}>M NEUZ - Top {capatalizeFirstLetter(props.category)} Headlines</h2>
            {/* {loading && <Spinner />} */}

            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                // inverse={true} //
                hasMore={article.length !== totalResults}
                loader={<Spinner />}
            // scrollableTarget="scrollableDiv"
            >
                <div className="container">

                    <div className="row my-3">
                        {article.map((e) => {
                            return <div className="col-md-4" key={e.url}>
                                <NewsItem mainS={props.sourceC} title={e.title ? e.title.slice(0, 45) : ""} newsUrl={e.url} imgUrl={e.urlToImage} description={e.description ? e.description.slice(0, 80) : ""} author={e.author} date={e.publishedAt} source={e.source.name} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className='d-flex justify-content-between'>

                        <button disabled={this.state.page <= 1} onClick={this.handelPrevBtn} className='btn btn-primary'>&larr; Previous</button>

                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} onClick={this.handelNextBtn} className='btn btn-primary'>Next &rarr;</button>
                    </div> */}
        </>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: "12",
    category: "general"
    // width: "0%"
}

export default News