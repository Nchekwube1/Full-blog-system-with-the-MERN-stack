import "./scss/blog.css"
import {useEffect,useState} from "react"
import axios from "axios"
import img from "./imgs/retrosupply-jLwVAUtLOAQ-unsplash.jpg"
function Blog() {
    const [posts,setPosts] = useState([])
    const[user,setUser]= useState({})
    useEffect(()=>{
       const token =  JSON.parse(localStorage.getItem("blogToken"))
    //    console.log(token.token)
       if(token){
             axios.get("http://localhost:3400/user",{
          headers:{"auth-token":`${token.token}`}
      }).then(res=>{
           if(res.status === 200){
                   setUser(res.data.user)
          setPosts(res.data.articles)
          console.log(res.data.articles)
           }else if(res.status ===401){
          window.location.replace("/signin")
           }
        })
       }
       else{
          window.location.replace("/signin")
       }
    },[])

    const logout =()=>{
        localStorage.removeItem("blogToken")
          window.location.replace("/signin")

    }
    return (
        <>
            <header className="bhead">
             <div className="name">
                 <h1>the blog</h1>
             </div>
             <div className="tabs">
                 <button>home</button>
                 <button>explore</button>
             </div>
             <div className="log">
                 <div className="pro">
                 <h4>{user?.username}</h4>

                 </div>
                 <button onClick={logout}>logout</button>
             </div>
            </header>

            <div className="body">
               <div className="inner">

                  { posts.length === 0? <h1>Loading ...</h1> :
                   posts.map(post=>{
                       return  <div className="each" key={post?.title}>
                     <a href={post?.url} className="img">
                          <img src={post?.urlToImage} alt="img" />
                     </a>
                     <div className="text">
                         <div className="header"><a href={post?.url}>{post?.title}</a></div>
                         <div className="para"><a href={post?.url}> {post?.description}</a> </div>
                     </div>
                </div> 
                   })
                  }
                      {/* <div className="each">
                     <div className="img">
                          <img src={img} alt="img" />
                     </div>
                     <div className="text">
                         <div className="header"><h1>typewriting? going back to the past</h1></div>
                         <div className="para"><a href="/"> typewriters are a great tool for writing and they dont require electricity supply to run so Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veritatis quod ea, excepturi ab quasi dicta facilis expedita natus doloremque, harum quos, sit vero assumenda quaerat! Aut nesciunt dolorum officia.</a> </div>
                     </div>
                </div> */}
               </div>
            </div>
            </>
        // </div>

    )
}

export default Blog
