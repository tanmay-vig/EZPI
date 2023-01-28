import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import Girl from '../assets/login/girlWBench.png'
import pic1 from '../assets/login/Profile.png'
import pic2 from '../assets/login/pan-card.jpg'
import pic3 from '../assets/login/padlock.png'
export default function SignUp() {
  return (
    <>
    <div className="bg13">
      <div className="home-taker">
      <Link to='/' className='login'>
         &lt; SignUp
      </Link>
      </div>
      <div className="bg23">
        <img src={Girl} alt="Girl" className='girl'/> <br />
        <p className='m-login'>SignUp</p>
        <div class="line"></div>
        <form action="">
        <div className="phone-bg1">
          <img src={pic1} alt="Profile" className='Profile1'/>
          <input type="text" className='input-p1' name='Name' placeholder='Name'/>
        </div>
        <div className="phone-bg1">
          <img src={pic2} alt="Profile" className='Profile1' />
          <input type="number" className='input-p1' name='pan_card' placeholder='PanCard Number'/>
        </div>
        <div className="phone-bg1">
          <img src={pic3} alt="Profile" className='Profile1' />
          <input type="password" className='input-p1' name='Password' placeholder=' Set Password'/>
        </div>
        <button type="submit" className='b1'>Done</button> <br />
        <button type="submit" className='b2'>
          <Link to="/login" className='l'>Login</Link>
        </button>
        </form>
      </div>
    </div>
    </>
  )
}
