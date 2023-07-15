import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData";
import { useState } from "react";


const Post = ({post}) => {
  const [like,setLike] = useState(post.likes)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
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
            <img className="loveImg" src="/Assets/like-png.png" onClick={likeHandler} alt=""></img>
            <img className="loveImg" src="/Assets/love-png.png" onClick={likeHandler} alt=""></img>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Post;