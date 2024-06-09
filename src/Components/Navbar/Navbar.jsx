import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.jpg'
import { Link} from 'react-router-dom'

const Navbar = () => {
    const [menue,setMenue] = useState("Home");
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src = {logo} alt="" />
            </div>
            
            <ul className='nav-menue'>
                <li onClick={()=>{setMenue("Home")}}> <Link to ='/'>Home</Link> {menue==="Home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenue("Tea")}}><Link to= '/Tea'>Tea</Link> {menue==="Tea"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenue("Teaweares")}}><Link to='/Teaweares'>Teaweares</Link> {menue==="Teaweares"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenue("Gifts")}}><Link to='/Gifts'>Gifts</Link> {menue==="Gifts"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenue("Cafe")}}><Link to='/Cafe'>Cafe</Link> {menue==="Cafe"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button> Login </button></Link>
                <Link to ='/Cart'><img src={cart} alt="" /></Link>

                <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
}
export default Navbar