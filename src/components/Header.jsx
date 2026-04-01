// import "bootstrap/dist/css/bootstrap.css"
// import bootstrap from "bootstrap/dist/js/bootstrap.js"
import './style.css'


function Header() {
  return (
   <div className='container'>
        <div id='header' className=' col-11 d-flex justify-content-between align-items-center p-4'>
            <h3>Cyber</h3>
            <input type="search" placeholder="&#x1F50E; Search..."/>
            <div>
                <ul className='d-flex justify-content-between gap-4 list-unstyled'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='d-flex justify-content-between gap-4 list-unstyled'>
                <img src="https://img.icons8.com/?size=100&id=87&format=png&color=000000" alt="" />
                <img src="https://img.icons8.com/?size=100&id=mlzugiBNw6GO&format=png&color=000000" alt="" />
                <img src="https://img.icons8.com/?size=100&id=7820&format=png&color=000000" alt="" />
                
            </div>
        </div>
   </div>
  )
}

export default Header