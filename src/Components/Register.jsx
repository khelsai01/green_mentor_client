import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom'
import { getRegister } from '../Redux/authentication/action'

const Register = () => {
    const dispatch = useDispatch()
    const nav =  useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")

    
    const handleSubmit =(e)=>{
        e.preventDefault()
        let obj ={username,email,password}
        dispatch(getRegister(obj))
        nav("/login")
    }
  return (
    <div className='w-full h-screen flex items-start bg-gray-200 '>
    <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
            <h1 className='text-3xl text-[#f4af2f] font-bold my-4'>Turn your idea into reality</h1>
            <p className='text-2xl text-[#f4af2f] fornt-semibold'>Start for the Todos task</p>
        </div>
        <img src='https://www.sme-news.co.uk/wp-content/uploads/2021/11/Login.jpg' className='w-full h-full object-cover' alt='login' />
    </div>
    <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col px-20 justify-between'>
        <h1 className='text-xl text-[#060606] font-bold  m-auto'>Tasks Managment</h1>

        <div className=' w-full  felx flex-col max-w-[500px] '>
            <div className='w-full flex flex-col mb-5'>
                <h3 className='text-3xl font-semibold mb-4 '>Registration</h3>
                <p className='text-base mb-2'>Welcome Back! Please enter your details</p>
            </div>
            <div className='w-full flex flex-col'>
            <input
                    type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder='Username'
                    className='w-full text-black my-2 py-4 bg-transparent border-b border-black outline-none focus:outline-none'
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='Email'
                    className='w-full text-black my-2 py-4 bg-transparent border-b border-black outline-none focus:outline-none'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Password'
                    className='w-full text-black my-2 py-2 bg-transparent border-b border-black outline-none focus:outline-none'
                />
            </div>
            <div className='w-full flex flex-col my-4'>
                <button type='submit' onClick={handleSubmit} className='w-full text-white font-semibold my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>Register</button>
                <button onClick={()=>nav("/login")} className='w-full text-[#060606] my-2 bg-white] border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>Log In</button>
            </div>
            <div className='w-full h-[1px] bg-[#727272]'></div>
        </div>
        {/* <div className='w-full flex items-center justify-center my-3'>
            <p className='text-sm font-normal text-[#060606]'>If you have aleady account? <span className='font-semibold underline underline-offset-2 cursor-pointer' onClick={()=>{<Link  to={"/login"} />}}>Sign In</span></p>
        </div> */}
    </div>
</div>
  )
}

export default Register