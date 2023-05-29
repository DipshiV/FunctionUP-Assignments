import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Navbar() {
   const items = useSelector((state)=> state.cart);  
  return (
    <div style={{display:'flex', alignItems:'space-between', boxShadow: '10px 10px 8px  #888888',padding:"20px", backgroundColor:"#c416e7"}}>
    <span className='logo'>Redux</span>
    <div>
    <Link className='navLink' to="/">Home</Link>
    <Link  className='navLink'  to="/Cart">Cart</Link>
    <Link  className='cartCount' >Cart items: {items.length}</Link>
    </div>
    </div>
  )
}

export default Navbar;