import { connect, useDispatch, useSelector } from "react-redux";
import deletePost from "../actions/postActions";
import { useNavigate, useParams } from "react-router-dom";

const PostView = (props) => {

    const { postId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const postItems = useSelector((state) => state.posts);

    const postItem = postItems.find((s) => s.id === postId);

    const deleteHandler = () => {
        dispatch(deletePost(postItem.id))
        navigate('/');
    }
    console.log(postItem);

    return (
        <>
            <h2>{postItem.title}</h2>
            <p>{postItem.body}</p>
            <button onClick={deleteHandler}>Delete</button>
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