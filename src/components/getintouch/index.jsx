import React, { useState, useSyncExternalStore } from 'react'
import { Button } from '../button' 

import backgoundImageMain from '../../images/unsplash_LeG68PrXA6Y.svg'
import backgroundPerson from '../../images/Person.svg'
import backgroundMail from '../../images/mail.svg'
import backgroundError from '../../images/Error.svg'

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const borderStyleForm = 'border-[2px] border-red'

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value)
    }

export const GetInTouch = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [story, setStory] = useState('')
    const [error, setError] = useState('')
    const [request, setRequest] = useState({})

    const onEnterHandler = (e) => {
        if (e.code == 'Enter') {
            e.preventDefault()
            setRequest((prev) => ({...prev, name, story}))

            if (isEmailValid(email)) {
                setRequest((prev) => ({...prev,  email}))
                setError(false)
            } else {
                setError(true)
                setEmail('')
            }
            
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(request)
    }
    return (
        <div className='flex h-[753px] md:h-[708px] xl:h-[708px] ' style={{ backgroundImage: `url(${backgoundImageMain})`}}>
        {/* // <div className='flex h-[753px] xl:h-[708px] relative'>
        //     <img src={backgoundImageMain} className='h-[753px] absolute -z-40'></img> */}
        <div className='flex-col my-[64px] mx-[10px] md:my-[70px] md:mx-[39px] xl:mx-[258px] bg-white w-[300px] h-[625px] md:w-[712px] xl:w-[764px] md:h-[568px] rounded-lg z-40'>
        <div className='flex-col my-[48px] mx-[5px] md:mx-[32px] xl:mx-[48px] xl:w-[668px] xl:h-[472px] rounded-lg'>
            <form onSubmit={submitHandler}>
            <label>
                <div className='text-xl font-semibold mt-[48px] mb-[36px] text-center md:text-left md:text-[32px] md:my-[48px]'>Let’s discuss your project</div>
                <div className='flex-col'>
                    <div className='md:flex'>
                    <div className='w-[258px]  md:w-[312px] xl:w-[324px] md:h-[88px]'>
                        <label className='flex ml-2 text-sm font-semibold md:text-base'> Your full name <span className='text-red pl-1'>*</span></label>
                        <input
                            style={{ backgroundImage: `url(${backgroundPerson})`, backgroundPosition: `left`}}
                            placeholder='Name Surname'
                            value={name} 
                            className='w-full h-[55px] text-sm font-normal md:text-base bg-no-repeat bg-auto box-border pl-[34px] ml-2 rounded-lg border-[#E5E7EB] bg-white border-[1px] hover:border-lavender' 
                            type="text" 
                            name="Name Surname" 
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={onEnterHandler}
                        />
                    </div>
                    <div className='flex-col w-[258px] md:w-[312px] xl:w-[324px] md:h-[88px] md:ml-[20px] xl:ml-[20px]'>
                        <label className='flex ml-2 text-sm font-semibold md:text-base'> Your email <span className='text-red pl-1'>*</span></label>
                        <input
                            style={{ backgroundImage: `url(${ error ? backgroundError : backgroundMail })`, backgroundPosition: `left`}}
                            placeholder='name@example.com' 
                            value={email} 
                            required
                            className={`w-full h-[55px] text-sm font-normal md:text-base ml-2 rounded-lg bg-no-repeat box-border pl-[34px] ${error ? borderStyleForm : ` border-[#E5E7EB] bg-white border-[1px] hover:border-lavender`}`}
                            type="email" 
                            name="Email" 
                            onChange={(e) => setEmail(e.target.value)}  
                            onKeyDown={onEnterHandler}
                        />
                        {error && <label className='text-red flex ml-2'> Please fill this mandatory field </label>}
                    </div>
                    </div>
                    <div className='flex-col w-[258px] md:w-[648px] xl:w-[668px] xl:h-[162px] mt-[16px] mb-[48px]'>
                        <label className='flex ml-2 text-sm font-semibold md:text-base'> Tell me about your project </label>
                        <textarea 
                            value={story}
                            placeholder='Add here a general description of your idea and target aim'
                            className='w-full h-[122px] text-sm/[21px] font-normal md:text-base box-border pl-[20px] pt-[14px] mt-2 ml-2 rounded-lg border-[#E5E7EB] bg-white border-[1px] hover:border-lavender'
                            onChange={(e) => setStory(e.target.value)}
                            onKeyDown={onEnterHandler}
                        />
                    </div>
                    <div className='pb-0'>
                    <Button text='Submit' error={error} type='submit'/>
                    </div>
                    
                    
                    
                </div>
            </label>
            </form>
        </div>
        </div>
        </div>
  )
}
