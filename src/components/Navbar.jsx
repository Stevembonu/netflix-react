//he uses jsx to use html snippetts and save time

import { async } from '@firebase/util'
import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext' //46
const Navbar = () => {
  const {user, logOut} = UserAuth() //47
  //console.log(user)
  const navigate = useNavigate()
const handleLogout = async () => { //49
  try {
    navigate('/') //redirect to home after logout
    await logOut()
  } catch(error){
  console.log(error)
  }
}

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'> {/*we put flex to move buttons to top and justifybtwn to separate them. the 100 in []is cos z-100 doesnt exist in tailwind. @12:30*/}
        <Link to='/'> {/*37 */}
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
            NETFLIX
        </h1>
        </Link>
      {user?.email ? <div>
        <Link to='/account'> {/*48  if user loged in, display this. else display below. we cut the code and put it in here. and i changed the step no for this and the other is unchanged*/}
          <button className='text-white pr-4'>Account</button>
        </Link>

        
          <button onClick={handleLogout} className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer'>Logout</button>
        
        </div>


        :
      <div>
        <Link to='/login'> {/*38 */}
          <button className='text-white pr-4'>Sign In</button>
        </Link>

        <Link to='/signup'>{/*39 . go to signup.jsx*/}
          <button className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer'>Sign Up</button>
        </Link>
        </div>}  
    </div>
  )
}

export default Navbar