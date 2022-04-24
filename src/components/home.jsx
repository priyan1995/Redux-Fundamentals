
import { connect } from "react-redux";
import News from "./news";


const Home = (props) => {


    const postItems = props.posts;

    console.log(props);

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