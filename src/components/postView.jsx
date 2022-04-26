import { connect } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PostView = (props) => {

    

    const postItem = props.posts;
    //console.log(props);

    let history = useHistory();
    const deleteHandler = () => {
       
        props.deletePost(props.posts.id);

        
        //history.push('/');
       
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
        deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(PostView)