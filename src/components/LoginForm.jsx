import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import{ AiOutlineEye , AiOutlineEyeInvisible } from 'react-icons/ai'

export const Loginform = () => {

    const navigate = useNavigate()
    const [eye , setEye] = useState(true)

    const [formdata, setFormdata] = useState({
        email:'', password:''
    })

    function changeHandler(event){
        setFormdata(prev=> ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault()
        toast.success('Log In')
        navigate(-1)
    }
    
  return (
   
        <form onSubmit={submitHandler}
        className='flex flex-col w-[full] gap-y-4 mt-3 border border-5 rounded-lg p-10 shadow-lg'
        >
            <label className='w-full '>
                <p className='text-[0.9rem] mb-1'>Email Address<sup  className='text-red-400'>*</sup></p>
                <input
                className='bg-richblack-700 p-[6px] rounded-md w-full outline-blue-800'
                required
                placeholder='Write Email Address'
                type='email'
                name='email'
                value={formdata.email}
                onChange={changeHandler}
                />
            </label>
            <label className='w-full relative'>
                <p className='text-[0.9rem] mb-1'>Password<sup className='text-red-400'>*</sup></p>
                <input
                className='bg-richblack-700 p-[6px] rounded-md w-full outline-blue-800 '
                required
                placeholder='Password'
                type={eye? 'password' : 'text'}
                name='password'
                value={formdata.password}
                onChange={changeHandler}
                />
                <span onClick={()=>setEye(!eye)}
                className='absolute bottom-7 right-[5px] bg-white text-[25px] w-[35px] p-auto'>
                        {
                        eye? <AiOutlineEye/> :<AiOutlineEyeInvisible/>
                        }
                </span>
                <span className='static text-blue-100 text-[13px] right-1 mt-1'>Forgot Password</span>
            </label>

            <div className='w-full mb-4'><button className='w-full rounded-md bg-yellow-500 py-[5px] text-richblack-900'>Sign In</button></div>
 

        </form>
  
  )
}
