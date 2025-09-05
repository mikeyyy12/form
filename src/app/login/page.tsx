'use client'
import { cn } from '@/lib/cn'
import React, { useState } from 'react'

const AuthPage = () => {
    type authPage = 'signin' | 'login'
    const [authPage, setAuthPage] = useState<authPage>('signin')
    return (
        <div className="relative bg-[#03030C] min-h-screen w-full overflow-hidden flex">
            <div className='border-2 relative m-3 rounded-3xl shadow-white border-white/5'>
                <img src="/bg.png" className="w-[44rem] h-[44rem]  rounded-3xl  mask-b-from-20% mask-b-to-80%" />
                <h2 className="absolute bottom-12 left-10 text-3xl font-medium max-w-[300px] mx-auto text-transparent tracking-tight bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600 z-10">
                    Be a part of something amazing
                </h2>
            </div>

            <div className='flex justify-center items-center flex-col flex-1  max-w-sm mx-auto '>
                {authPage == "signin" ? <h1 className='text-xl text-white font-normal tracking-tighter'>Sign In to your Account</h1> :
                    <h1 className='text-xl text-white font-normal tracking-tighter'>Log in to your account</h1>}
                <p className='text-sm text-neutral-600 py-px'>Enter your details to continue!</p>
                <div className='bg-white/5 border border-white/10 flex text-white gap-3  rounded-lg my-4 text-sm transition duration-200'>
                    <div onClick={() => setAuthPage("signin")} className={cn(authPage === "signin" && "bg-[#646468]/50 rounded-lg shadow-md", " p-2 ")}>Sign in</div>
                    < div onClick={() => setAuthPage("login")} className={cn(authPage === "login" && "bg-[#646468]/50 rounded-lg shadow-md", " p-2 cursor-pointer ")} > Log in</div>
                </div>
                {authPage == 'signin' ? <Signin /> : <Login />}
                <button className='text-white bg-gradient-to-b from-[#5F4AE8] text-sm to-[#432AE4] w-[calc(100%-1.2rem)] py-2 rounded-lg mx-10 my-4'>Submit</button>
            </div>

        </div >

    )
}

export default AuthPage;


const Signin = () => {
    return (
        <div className='w-full' >

            <Group>
                <Label htmlFor='username'
                >User Name</Label>
                <Input name='username' type='text' placeholder='Enter your name' />
            </Group>
            <Group>
                <Label htmlFor='email'
                >Email</Label>
                <Input name='email' type='text' placeholder='Enter your name' />
            </Group>
            <Group>
                <Label htmlFor='password'
                >Password</Label>
                <Input name='password' type='text' placeholder='Enter your name' />
            </Group>
        </div>
    )
}

const Login = () => {
    return (
        <div className='w-full' >
            <Group>
                <Label htmlFor='email'
                >Email</Label>
                <Input name='email' type='email' placeholder='Enter your name' className='invalid:border-red-500' />
            </Group>
            <Group>
                <Label htmlFor='password'
                >Password</Label>
                <Input name='password' type='text' placeholder='Enter your name' />
            </Group>
        </div>
    )
}



const Group = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col gap-2  p-2 rounded-lg w-full'>
            {children}
        </div>
    )
}

const Label = ({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.LabelHTMLAttributes<HTMLLabelElement>) => {
    return (
        <label
            {...props}
            className={cn("text-[#E6E6E6] text-sm font-medium",
                className
            )}>{children}</label>
    )
}

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...props}
            className={cn('focus:outline-none border focus:ring-2 w-full h-full focus:ring-white/5  focus:border-white/5 focus:bg-back placeholder:text-[#454850] transition text-white duration-200 border-transparent px-4 py-2 text-sm bg-back rounded-lg ',
                className
            )}

        />
    )
}