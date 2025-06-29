
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import News from "./pages/news/news";


const Home = (props) => {

    const postItems = props.posts;

    return (
        <>
            <h2 className="main-title">Posts</h2>

            {
                postItems.map(post => {
                    return (
                        <>
                            <div className="post-items" key={post.id}>
                                <h4>{post.title}</h4>
                                <p>{post.body}</p>
                                <Link to={`/post-view/${post.id}`}>Read More</Link>
                            </div>
                        </>
                    )
                })
            }

            <News />

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)