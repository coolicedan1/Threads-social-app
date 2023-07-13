import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

const sidebar = () => {
  return(
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Feed</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Chat</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <OndemandVideoIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Videos</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Groups</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Bookmarks</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Questions</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <WorkOutlineIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Jobs</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Events</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"></hr>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend"></li>
          <img className="sidebarFriendImg" src="/Assets/person/4.jpg.jpg" alt=""></img>
          <span className="sidebarFriendName">Daniel Tytan</span>
        </ul>
        
      </div>
    </div>

  )
}

export default sidebar;