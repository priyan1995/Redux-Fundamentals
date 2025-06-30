import { connect, useDispatch, useSelector } from "react-redux";
import deletePost from "../../../actions/postActions";
import { useNavigate, useParams } from "react-router-dom";
import { UiModal } from "../../common/UiModal";
import { closeModal, openModal } from "../../../actions/modalActions";

const PostView = (props) => {

    const { postId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const postItems = useSelector((state) => state.app.posts);

    const modalOpen = useSelector((state) => state.app.openmodal);

    const postItem = postItems.find((s) => s.id === postId);

    const deleteHandler = () => {
        dispatch(deletePost(postItem.id))
        dispatch(closeModal())
        navigate('/');
    }

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    return (
        <>
            <h2>{postItem.title}</h2>
            <p>{postItem.body}</p>
            <button onClick={() => dispatch(openModal())}>Delete</button>

            <UiModal
                title="Are you sure you want to delete this Post?"
                deleteHandler={deleteHandler}
                modalOpen={modalOpen}
                handleCloseModal={handleCloseModal}
            />
        </>
    )

}

// const mapStateToProps = (state, ownProps) => {
//     let pid = ownProps.match.params.postId;
//     return {
//         posts: state.posts.find(posts => posts.id === pid)
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deletePost: (id) => { dispatch(deletePost(id)) }
//     }
// }


export default PostView;