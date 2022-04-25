
import { connect } from "react-redux";

const NewsView = (props) => {

    const newsItem = props.news;
   
    return (
        <>
            <h2>{newsItem.title}</h2>
            <p>{newsItem.body}</p>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.newsId;
    return {
        news: state.news.find(news => news.id === id)      
    }
}

export default connect(mapStateToProps)(NewsView);