import React from 'react'

const NewsItem = (props) => {

    // static defaultProps = {
    //     sourceC: "danger"
    //     // width: "0%"
    // }
    // static defaultProps = {
    //     sourceC: "warning"
    //     // width: "0%"
    // } 
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <>
            <div className="card my-3" style={{ width: "23rem" }}>
                <img src={!imgUrl ? "https://images.hindustantimes.com/tech/img/2022/05/29/1600x900/4_1646716534850_1653833656007.jpg" : imgUrl} className="card-img-top" alt="..." />
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${props.mainS}`}>
                    {source}
                    <span className="visually-hidden">unread messages</span>
                </span>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By: {!author ? "Unknown " : author}. On {new Date(date).toGMTString()}</small></p>

                    <a target="_blank" href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}

export default NewsItem