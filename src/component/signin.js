

import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import {useState} from "react" 


function Signup(props) {

const [data,setData]=useState("")


  axios({
    
    methos:"get",
    url:"http://localhost:3001/api"
  
  }).then(function(res){
  //  console.log( res.data)
    setData(res.data)
  })



 
  const [name, setname] = useState('');
const [updated, setUpdated] = useState(name);

const [email, setemail] = useState('');
const [updated2, setUpdated2] = useState(email);

const [password, setpassword] = useState('');
const [updated3, setUpdated3] = useState(password);
        
const handleChange = (event) => {
  setname(event.target.value);
  console.log(updated)

};
const handleClick = () => {
  
  setUpdated(name);
  console.log(name)
  return name
};

const handleChange2 = (event) => {
  setemail(event.target.value);
  console.log(updated2)

};
const handleClick2 = () => {
  
  setUpdated2(email);
  console.log(email)
  return email
};


const handleChange3 = (event) => {
  setpassword(event.target.value);
  console.log(updated3)

};
const handleClick3 = () => {
  
  setUpdated3(password);
  console.log(password)
  return password
};
  return (
    <form>

<div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" onChange={handleChange}
        value={name}/>
      <label class="form-label" for="form2Example1">name</label>
    </div>
   
    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" onChange={handleChange2}
        value={email} />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>
  
   
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control" onChange={handleChange3}
        value={password} />
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  
  
    
  
   
    <button type="button" class="btn btn-primary btn-block mb-4" onClick={ ( )=>{var name=handleClick();
                                                      var email=handleClick2();
                                                      var password=handleClick3();
                                                      
                                                      axios.post('http://localhost:3001/api/register', {
                                                        name: name,
                                                        email: email,
                                                        password: password
                                                      })
                                                      .then(function (response) {
                                                        console.log(response);
                                                        props.fun("login")

                                                      })
                                                      .catch(function (error) {
                                                        console.log(error);
                                                      });
                                                      
                                                      } }>Sign in</button>
  
  
  <button type="button" class="btn btn-primary btn-block mb-4" onClick={()=>{props.fun('login')}}>Login</button>
  
    
      
      
  </form>
    )
   
}

export default Signup;