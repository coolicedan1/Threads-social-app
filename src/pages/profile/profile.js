import "./profile.css";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";

const profile = () => {
  return(
  <>
  <Topbar/>
  <div className="profile">
    <Sidebar />
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
        <img className="profileCoverImg" src="/Assets/cover.jpeg" alt="profileCoverImg"></img>
        <img className="profileUserImg" src="/Assets/person/3.jpg.jpg" alt="profileUserimg"></img>
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName"> Daniel Isaac Aruwa</h4>
          <sapn className="profileInfoDesc">Hello Friends</sapn>
        </div>
      </div>
      <div className="profileRightBottom">
        <Feed />
        <Rightbar profile/>
      </div>
    </div>
  </div>
  </>
  )
}

export default profile;