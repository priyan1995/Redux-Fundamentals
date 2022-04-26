import { connect } from "react-redux"

const PostView = (props) => {
    const postItem = props.posts;
    console.log(postItem);
    return (
        <>
            <h2>{postItem.title}</h2>
            <p>{postItem.body}</p>
        </>
    )

}

const mapStateToProps = (state, ownProps) => {
    let pid = ownProps.match.params.postId;
    return{
        posts: state.posts.find(posts => posts.id === pid)
    }
}

export default connect(mapStateToProps)(PostView)