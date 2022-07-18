import TopBar from "./components/topBar/TopBar";
import HomePage from "./pages/homePage/HomePage";
// import About from  "./pages/"
// import SinglePage from "./pages/singlePostPage/SinglePage"
import WritePage from "./pages/writePage/WritePage";

import Setting from "./pages/setting/setting"
// import SideBar from "./components/sidebar/sidebar";
import Login from "./pages/login/Login";

import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

// import{
//   Switch,
//   Route,
//   Link,
// }from "react-router-dom"



function App() {
  const user = false;
  return (
    <Router>
     <TopBar />
     {/* <HomePage /> */}
     {/* <WritePage/> */}
     {/* <Setting /> */}
     {/* {<Login />} */}
     
     <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/login">{user ? <HomePage /> : <Login />}</Route>
      <Route path="/write">{user ? <WritePage /> : <Login />}</Route>
      <Route path="/setting">{user ? <Setting /> : <Login />}</Route>

      {/* <Route path="/post/postId">
        <Single />
      </Route> */}
      


     </Switch>
     
    </Router>
  );
}

export default App;
