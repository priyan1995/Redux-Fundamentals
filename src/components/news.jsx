import { connect, useSelector } from "react-redux"
import { Link } from "react-router-dom";

const News = (props) => {

    const news = useSelector((state) => state.news)

    return (
        <>

            <h2 className="main-title">News</h2>

            {
                news.length === 0 ?
                    (
                        <h2 className="text-center">No News Items Found...!</h2>
                    )
                    :
                    (
                        news.map(newsItem => {
                            return (

                                <div className="post-items" key={newsItem.id}>
                                    <h2>{newsItem.title}</h2>
                                    <p>{newsItem.body}</p>
                                    <Link to={`/news-view/${newsItem.id}`}>View More</Link>
                                </div>

                            )
                        })
                    )
            }

        </>
    )
}


export default News;