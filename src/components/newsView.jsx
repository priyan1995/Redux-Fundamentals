
import { connect, useDispatch, useSelector } from "react-redux";
import deleteNews from "../actions/newsActions";
import { useNavigate, useParams } from "react-router-dom";
import { UiModal } from "./common/UiModal";
import { closeModal, openModal } from "../actions/modalActions";

const NewsView = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { newsId } = useParams();

    const newsItems = useSelector((state) => state.news);
    const newsItem = newsItems.find((s) => s.id === newsId);
    const modalOpen = useSelector((state)=>state.openmodal);

    const deleteHandeler = () => {
        dispatch(deleteNews(newsItem.id));
        dispatch(closeModal());
        navigate('/')
    }

    const handleCloseModal = () => {
        dispatch(closeModal());
    }

    return (
        <>
            <h2>{newsItem.title}</h2>
            <p>{newsItem.body}</p>
            <button onClick={()=>dispatch(openModal())}> Delete News</button>

            <UiModal
                title="Are you sure you want to delete this News?"
                deleteHandler={deleteHandeler}
                modalOpen={modalOpen}
                handleCloseModal={handleCloseModal}
            />
        </>
    )
}



export default NewsView;