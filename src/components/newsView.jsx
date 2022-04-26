
import { connect } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import deleteNews from "../actions/newsActions";

const NewsView = (props) => {

    const history = useHistory();

    const newsItem = props.news;
    // console.log(newsItem)

    const deleteHandeler = () => {
        props.deleteNews(props.news.id);
        history.push('/')
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