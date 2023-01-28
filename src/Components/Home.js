import React from 'react'
import './Home.css'
import Logo from '../assets/ezpi.png'
import People1 from '../assets/people1.png'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <>
    <div className="bg1">
        <img src={Logo} alt="logo" className='logo' /> <br />
        <img src={People1} alt="People" className='people1'/>
    </div>
    <div className="bg2">
      <div className="liner">Easy Online Payment</div>
      <div className="definition">Make your payment experience more better today. <br /> No additional admin fee</div>
      <button className="btn"  to="/LoginD">
        <Link to="/login" className='login'>
        Login
        </Link>
        </button> 
      <button className="btn bg-gray">
        <Link to='/SignUp' className='SignUp'>SignUp</Link>
      </button>
      
    </div>
    </>
  )
}
