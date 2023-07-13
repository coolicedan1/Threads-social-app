import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";

const feed = () => {
  return(
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>

  )
}

export default feed;