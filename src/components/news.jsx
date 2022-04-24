import { connect } from "react-redux"

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