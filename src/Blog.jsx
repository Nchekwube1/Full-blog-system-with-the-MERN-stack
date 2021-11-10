import "./scss/blog.css"
import img from "./imgs/retrosupply-jLwVAUtLOAQ-unsplash.jpg"
function Blog() {
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
                 <button>logout</button>
             </div>
            </header>

            <div className="body">
               <div className="inner">
                      <div className="each">
                     <div className="img">
                          <img src={img} alt="img" />
                     </div>
                     <div className="text">
                         <div className="header"><h1>typewriting? going back to the past</h1></div>
                         <div className="para"><a href="/"> typewriters are a great tool for writing and they dont require electricity supply to run so Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veritatis quod ea, excepturi ab quasi dicta facilis expedita natus doloremque, harum quos, sit vero assumenda quaerat! Aut nesciunt dolorum officia.</a> </div>
                     </div>
                </div>
               </div>
            </div>
            </>
        // </div>

    )
}

export default Blog
