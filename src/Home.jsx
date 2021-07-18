import React from 'react'
import {Link } from "react-router-dom"
import "./scss/home.css"

function Home() {
    return (
                  <div className="home">
           <div className="modal">
<div className="txt">
    <h1>welcome</h1>
    <h2>the world is just a few clicks away</h2>
    <h3>get sizzling hot news from all over the world right at your doorsteps</h3>
</div>

          <div className="btn">
                   <div className="up"><Link to="/signup"><button className="signup">Sign Up</button></Link></div>
               <div className="in"><Link to="/signin"><button className="signin">sign in</button></Link></div>
          </div>
           </div>
        </div>
    )
}

export default Home
