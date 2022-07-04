import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext' //42

const Signup = () => { //40 fill out initial designs and go to login.jsx
    const [email, setEmail] = useState('')//44
    const [password, setPassword] = useState('')//44
    const{user, signUp} = UserAuth() //43. these are exported from authcontext
    const navigate = useNavigate() //44
    const handleSubmit = async (e) => {
        e.preventDefault() //we dont want from to be submitted
        try {
            await signUp(email, password)
            navigate('/') //45. go to navbar.jsx for 46
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
    <>
        <div className='w-full h-screen'> 
            <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/6af49fd7-be5e-435f-9ff9-7abf98e2be11/US-en-20220613-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/' /> {/*hidden  = dont display image on mobile */}
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div> {/*overlay */}
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'> {/*signup div or container */}
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input 
                                onChange={(e) => setEmail(e.target.value)}
                                className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder = 'Email' autoComplete='email' />
                                <input 
                                onChange={(e) => setPassword(e.target.value)}
                                className='p-3 my-2 bg-gray-700 rounded' type = 'password' placeholder='Password' autoComplete='current-password'/>
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'><span className='text-gray-600'>Already subsribed to Netflix?
                                
                                </span> {' '}
                                <Link to='/login'>
                                    Sign In
                                </Link>
                                </p>
                            </form>                          
                        </div>
                    </div>

                </div>
        </div>
    </>
  )
}

export default Signup