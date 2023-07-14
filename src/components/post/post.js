import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData";


const post = ({post}) => {
  return(
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt=""></img>
            <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt=""></img>
        </div>
        <div className="postButtom">
          <div className="postButtomLeft">
            <img className="loveImg" src="/Assets/like-png.png" alt=""></img>
            <img className="loveImg" src="/Assets/love-png.png" alt=""></img>
            <span className="postLikeCounter">{post.likes}</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default post;