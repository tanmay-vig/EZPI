
import { Link } from 'react-router-dom'
import './loginD.css'
import Girl from '../assets/login/girlWBench.png'
import pic1 from '../assets/login/Profile.png'
import pic2 from '../assets/login/padlock.png'
export default function login_d() {
    return (
    <>
    <div className="bg11">
      <div className="home-taker">
      <Link to='/' className='login'>
         &lt; loginpage
      </Link>
      </div>
      <div className="bg22">
        <img src={Girl} alt="Girl" className='girl'/> <br />
        <p className='m-login'>login</p>
        <div class="line"></div>
        <form action="">
        <div className="phone-bg">
          <img src={pic1} alt="Profile" className='Profile'/>
          <input type="text" className='input-p' name='phone_no' placeholder='Phone Number'/>
        </div>
        <div className="phone-bg">
          <img src={pic2} alt="Profile" className='Profile' />
          <input type="password" className='input-p' name='password' placeholder='Password'/>
        </div>
        <button type="submit" className='b1'>Login In</button> <br />
        <button type="submit" className='b2'>
          <Link to="/SignUp" className='l'>Sign Up</Link>
        </button>
        </form>
      </div>
    </div>
    </>
  )
}
