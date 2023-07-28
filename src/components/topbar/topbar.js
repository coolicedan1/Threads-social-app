import "./topbar.css";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom";

const topbar = () => {
  return(
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Threads</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="search">
          <SearchIcon className="searchIcon"/>
          <input placeholder="search for friends, post or any videos." className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlink">
          <span className="topbarlink">Home</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">4</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
          </div>
        </div>
        <img src="Assets/person/3.jpg.jpg" alt="" className="topbarimg" />
      </div>
    </div>

  )
}

export default topbar;