import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import './home.css'

const home = () => {
  return(
 <>
  <Topbar/>
  <div className="homeContainer">
    <Sidebar />
    <Feed />
    <Rightbar />
  </div>
</>
  )
}

export default home;

