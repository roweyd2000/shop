
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import {useState} from "react" 
import Signup from './component/signin';
import Login from './component/login';
import Posts from './component/posts';
import OnePost from './component/OnePost';



function App() {
  
  const[view,setview]=useState("signin")

const changeView=(view)=>{
     setview(view)
}


  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
 <a className="navbar-brand" href="#" onClick={()=>{changeView("posts")}}>    e-shop    </a>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarText">
   <ul className="navbar-nav mr-auto">
     <li className="nav-item active">
      
     </li>
   </ul>
   
 </div>
</nav>

 { view==='signin'  && <Signup fun={changeView}/>}
 { view==='login'  && <Login fun={changeView}/>}
 { view==='posts'  && <Posts fun={changeView}/>}
 { view==='onepost'  && <OnePost />}
</div>
     
   
  )
   
}

export default App;
