import '../App'
import '../index.css'
import React from "react";
import { Link } from "react-router-dom"

export default function Signup(){
    return(
        <div className='w-screen h-screen flex flex-col justify-center items-center text-white'>
        <h1 className=' text-3xl font-bold'>Sign Up</h1>
        <div className='container w-72 h-80 m-6 drop-shadow-md border rounded-xl text-sm '>
            <form >
            <input type="tect" className=' mx-8 mt-8 p-2 text-white bg-transparent text-sm placeholder:text-white focus:outline-none hover:translate-y-1 border-b w-56'  placeholder='Name'/>
                <input type="email" className=' mx-8 mt-4 p-2 text-white bg-transparent text-sm placeholder:text-white focus:outline-none hover:translate-y-1 border-b w-56'  placeholder='Email'/>
                <input type="password" className=' mx-8 mt-4 p-2 text-white bg-transparent text-sm placeholder:text-white focus:outline-none hover:translate-y-1 border-b w-56'  placeholder='Password'/>
                <button className='mt-8 mx-20 p-4 rounded-md w-32 hover:bg-white hover:text-black border '>Register</button>
            </form>
            <Link to="/login">
            <button className=' text-xs opacity-80 mx-14 my-4 underline hover:translate-y-1'>Already a user? Login here!</button>
            </Link>
        </div>
    </div>
    )
}