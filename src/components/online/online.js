import "./online.css"

const online = ({user}) =>{
  return(
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture}></img>
          <div className="rightbarOnline"></div>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}

export default online;