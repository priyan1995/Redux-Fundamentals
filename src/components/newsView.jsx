
import { connect, useDispatch, useSelector } from "react-redux";
import deleteNews from "../actions/newsActions";
import { useNavigate, useParams } from "react-router-dom";

const NewsView = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { newsId } = useParams();

    const newsItems = useSelector((state) => state.news);
    const newsItem = newsItems.find((s) => s.id === newsId)

    const deleteHandeler = () => {
        dispatch(deleteNews(newsItem.id))
        navigate('/')
    }

    return (
        <>
            <h2>{newsItem.title}</h2>
            <p>{newsItem.body}</p>
            <button onClick={deleteHandeler}> Delete News</button>
        </>
    )
}



export default NewsView;