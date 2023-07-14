import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/online";

const rightbar = () => {
  return(
    <div className="rightbar">
      <div className="rightbarwrapper">
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
      </div>
    </div>

  )
}

export default rightbar;