
import { connect } from "react-redux";
import deleteNews from "../actions/newsActions";

const NewsView = (props) => {

    const newsItem = props.news;
    console.log(newsItem)

    const deleteHandeler = () => {
        props.deleteNews(props.news.id)
    }
   
    return (
        <>
            <h2>{newsItem.title}</h2>
            <p>{newsItem.body}</p>
            <button onClick={deleteHandeler}> Delete News</button>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.newsId;
    return {
        news: state.news.find(news => news.id === id)      
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteNews: (id) => {dispatch(deleteNews(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(NewsView);