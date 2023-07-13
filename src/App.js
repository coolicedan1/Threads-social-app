import Topbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/sidebar";
import Feed from "./components/feed/feed";
import Rightbar from "./components/rightbar/rightbar";
import './home.css'


function App() {
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

export default App;
