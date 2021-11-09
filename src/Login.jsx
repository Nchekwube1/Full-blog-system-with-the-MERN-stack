import {Link} from 'react-router-dom'
import {useState} from "react"
import "./scss/login.css"
const axios = require("axios")
axios.defaults.withCredentials = true

function Login() {
const [state,setState] = useState({
    email:"",
    password:""
})
const [error, setError] = useState(false)
const [errorMessage, setErrorMessage] = useState("")


 async   function handleSubmit(e){
e.preventDefault()
    let {email} = state
    let {password} = state
    if(state.email===""||state.password===""){
          setError(true)
          setErrorMessage(" Fill out fields")
         return setTimeout(()=>{setError(false)
        setErrorMessage("")},2300)
    }
    const loginuser = {
        email,
        password
    }
    


        axios.post("http://127.0.0.1:3400/signin",loginuser,    {
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
    } }    )
         .then(res =>{
           if(res.status === 200){ 
                 console.log(res.data)
  
            setState({
    email:"",
    password:""
    })
        }
        if(res.status ===209){
          setError(true)
          setErrorMessage(" email not found")
               setState({
            ...state,
             password:""
           })
       return setTimeout(()=>{setError(false)
        setErrorMessage("")},2300)
        }
        if(res.status ===208){
          setError(true)
          setErrorMessage("internal error")
               setState({
            ...state,
             password:""
           })
       return setTimeout(()=>{setError(false)
        setErrorMessage("")},2300)
        }
     
    })
    .catch(err=>{console.log(err)})

}
       

    return (
      
       <div className="cont">
    <div className="login"> 
     <div className="head">
          <Link to="/"> <h1>The blog</h1></Link>
     </div>
    <div className="pad">
       
           {error?  <div className="error">
                 <h1>{errorMessage}</h1>
             </div>  :  null}
        <form onSubmit={handleSubmit} >
            <input type="email" placeholder="E-mail" value={state.email} onChange={(e)=>{
            setState({...state, email : e.target.value})
}} />
            <input type="password" placeholder="password" value={state.password} onChange={(e)=>{
                setState({...state, password:e.target.value})
            }} />
            <button type="submit">sign in</button>
        </form>
        <div className="sup">
            <h4>Don't have an account?</h4>
            <Link to="/signup"><button>sign up</button></Link>
        </div>
    </div>
    </div>
       </div>
    )
}

export default Login
