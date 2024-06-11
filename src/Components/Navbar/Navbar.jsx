import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.jpg'
import { Link} from 'react-router-dom'
import { ShopContext } from '../../Context/Shopcontext'

const Navbar = () => {
    const [menue,setMenue] = useState("Home");
    const {gettotalcartitems}=useContext(ShopContext);




    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src = {logo} alt="" />
            </div>
            
            <ul className='nav-menue'>
                <li onClick={()=>{setMenue("Home")}}> <Link to ='/'>Home</Link> {menue==="Home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenue("Tea")}}><Link to= '/Tea'>Tea</Link> {menue==="Tea"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenue("Teawares")}}><Link to='/Teawares'>Teawares</Link> {menue==="Teawares"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenue("Gifts")}}><Link to='/Gifts'>Gifts</Link> {menue==="Gifts"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenue("Cafe")}}><Link to='/Cafe'>Cafe</Link> {menue==="Cafe"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login'>
                <Link to='/login'><button> Login </button></Link>
            <div className="nav-cart">
                <Link to ='/Cart'><img src={cart} alt="" /></Link>
                <div className="nav-cart-count">{gettotalcartitems()}</div>
            </div>
            </div>
            </div>

    )
}
export default Navbar