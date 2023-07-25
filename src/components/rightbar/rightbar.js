import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/online";

const rightbar = ({profile}) => {

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/Assets/gift.png" alt="birthday image" ></img>
          <span className="birthdayText"><b>Elias Ifeoma</b> and <b> 5 other friends</b> have a birthday today.</span>
        </div>
        <img className="rightbarAd" src="/Assets/ads.jpg" alt=""></img>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key= {u.id} user= {u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoKeyValue">Nigeria</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoKeyValue">Lagos</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoKeyValue">Single</span>
        </div>
     </div>
     <h4 className="rightbarTitle">User Friends</h4>
     <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="/Assets/person/2.jpg.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Snow</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/Assets/person/3.jpg.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Snow</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/Assets/person/1.jpg.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Snow</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/Assets/person/5.jpg.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Snow</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/Assets/person/8.jpg.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Snow</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/Assets/person/4.jpg.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Snow</span>
      </div>
     </div>
    </>
    )
  }
  
  return(
    <div className="rightbar">
      <div className="rightbarwrapper">
       {profile ? <ProfileRightbar /> : <HomeRightbar/>} 
      </div>
    </div>

  )
}

export default rightbar;