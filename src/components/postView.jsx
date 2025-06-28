import { connect } from "react-redux";
import deletePost from "../actions/postActions";
import { useNavigate } from "react-router-dom";

const PostView = (props) => {



    const postItem = props.posts;
    //console.log(props);

    const navigate = useNavigate();
    
    const deleteHandler = () => {

        props.deletePost(props.posts.id);

        navigate('/');
    }


    return (
        <>
            <h2>{postItem.title}</h2>
            <p>{postItem.body}</p>
            <button onClick={deleteHandler}>Delete</button>
        </>
    )

}

const mapStateToProps = (state, ownProps) => {
    let pid = ownProps.match.params.postId;
    return {
        posts: state.posts.find(posts => posts.id === pid)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(PostView)