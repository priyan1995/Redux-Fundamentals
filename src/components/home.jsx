
import { connect } from "react-redux";


const Home = (props) => {


    const postItems = props.posts;

     console.log(props);

    return (
        <>
            <h2>Posts</h2>

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

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        news: state.news
    }
}

export default connect(mapStateToProps)(Home)