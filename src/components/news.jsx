import { connect } from "react-redux"
import { Link } from "react-router-dom";

const News = (props) => {

    const news = props.news;

    // console.log(news);

    return (
        <>

            <h2 className="main-title">News</h2>

            {
                news.map(newsItem => {
                    return (

                        <div className="post-items" key={newsItem.id}>
                            <h2>{newsItem.title}</h2>
                            <p>{newsItem.body}</p>
                            <Link to={`/news-view/${newsItem.id}`}>View More</Link>
                        </div>

                    )
                })
            }

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps)(News)