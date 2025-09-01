import { connect, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import News from "./pages/news/news";
import { Button } from "@mui/material";

const Home = (props) => {
  const postItems = useSelector((state) => state.app.posts);

  const navigate = useNavigate();

  const imageUploadUrl = () => {
    navigate("/image-upload");
  };

  return (
    <>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="pd-nav-logout"
        onClick={imageUploadUrl}
      >
        Image Upload
      </Button>

      <h2 className="main-title">Posts</h2>

      {postItems.map((post) => {
        return (
          <>
            <div className="post-items" key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <Link to={`/post-view/${post.id}`}>Read More</Link>
            </div>
          </>
        );
      })}

      <News />
    </>
  );
};

export default Home;
