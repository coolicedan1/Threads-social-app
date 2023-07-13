import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';


const post = () => {
  return(
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/Assets/person/3.jpg.jpg" alt=""></img>
            <span className="postUsername">Daniel Tytan</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Happy Cake Day :)</span>
          <img className="postImg" src="/Assets/posts/4.jpgs.jpg" alt=""></img>
        </div>
        <div className="postButtom">
          <div className="postButtomLeft">
            <img className="loveImg" src="/Assets/like-png.png" alt=""></img>
            <img className="loveImg" src="/Assets/love-png.png" alt=""></img>
            <span className="postLikeCounter">50 people like it</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">40 comments</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default post;