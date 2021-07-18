import "./scss/signup.css"
import {Link} from "react-router-dom"
import {useState} from "react"
const axios = require("axios")

function Signup() {
const [state, setState] = useState({
    username:"",
    email:"",
    password:""
})
const [error, setError] = useState(false)
const [errorMessage, setErrorMessage] = useState("")
 function handleSubmit(e){
e.preventDefault()
if(state.username===""||state.email===""||state.password===""){
   setErrorMessage("please fill out all fields")
    setError(true)
    return setTimeout(()=>{setError(false)
        setErrorMessage("")},2300)
}
    let {username} = state
    let {email} = state
    let {password} = state
    const signupuser = {
        username,
        email,password
    }
    axios.post("http://127.0.0.1:3400/signup",signupuser)
    .then(res =>{
        if(res.status === 200){
          window.location.replace("/signin")
              setState({
              username:"",
             email:"",
             password:""
           })
        }

       else if(res.status===209){
           setErrorMessage("email already exists")
              setState({
            ...state,
             password:""
           })
         setError(true)
       return setTimeout(()=>{setError(false)
        setErrorMessage("")},2300)
 
        }

   
    })
    .catch(err=>{console.log(err)})
    


}
    return (
 <div className="signup">
     <div className="width">
         <div className="side">
             <div className="modal"></div>
             <div className="title">
                <div className="txt">
                 <Link to="/">    <h1>
                     the blog
                 </h1></Link>
                </div>
             </div>
           <div className="txt">
                 <h1>
                 get started reading and writing great contents
             </h1>
           </div>
         </div>

         <div className="form">
             <div className="signin">
                 <div className="righ">
                     <h1>Already have an account?</h1>
                     <Link to ="/signin"> <button>sign in</button></Link>
                 </div>
             </div>

         <form onSubmit={handleSubmit} >
             <div className="item">
            {error?  <div className="error">
                 <h1>{errorMessage}</h1>
             </div> :  null}
          <div className="in">
                     <input type="text" placeholder="Username" name="username" value={state.username} onChange={(e)=>{
                        setState({...state, username:e.target.value})
                     }} />
                 <input type="email" placeholder="Email" name="email" value={state.email}  onChange={(e)=>{
                        setState({...state, email:e.target.value})
                     }}/>
                 <input type="password" name="password" placeholder="password" value={state.password} onChange={(e)=>{
                        setState({...state, password:e.target.value})
                     }}/>
          </div>

              <div className="btn">
                     <button type="submit">sign up &#8594; </button>
              </div>
             </div>

         </form>
         </div>
     </div>
 </div>
    )
}

export default Signup
