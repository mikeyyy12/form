'use client'
import { cn } from '@/lib/cn'
import React from 'react'

export const Form = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted!");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='h-full w-full bg-gray-50 px-8 py-14 mx-auto max-w-xl'
        >
            <h1 className={cn("relative text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700")}>
                This is a {" "}
                <span className={cn("relative inline-block text-white",
                    "after:contents-[''] after:w-full after:h-full after:bg-red-500 after:-z-10 z-10 after:absolute after:inset-0 after:-skew-2"
                )}>crazy</span>{" "}
                good form
            </h1>
            <div className='my-12 flex flex-col gap-8'>
                <Group >
                    <Label htmlFor='firstname'
                    >First Name</Label>
                    <Input name='firstname' type='text' placeholder='Enter your name' />
                </Group>
                <Group >
                    <Label htmlFor='email'
                        className="after:content-['*'] after:text-red-500"
                    >Email</Label>
                    <Input name='email' type='email' placeholder=' enter your email' className="invalid:border-red-500 invalid:shadow-none" />
                </Group>
                <Group >
                    <Label htmlFor='company'
                        className="after:content-['*'] after:text-red-500"
                    >Company</Label>
                    <Input name='compnay' type='text' placeholder='Enter your company' />
                </Group>
                <Group >
                    <Label htmlFor='message'
                        className="after:content-['*'] after:text-red-500"
                    >Message</Label>
                    <Input name='compnay' type='text' placeholder='Enter your message' />
                </Group>
                <button className="bg-black hover:bg-neutral-700 transition-all duration-200 hover:-translate-y-0.5 text-white rounded-md px-4 py-2 cursor-pointer shadow-sm
                active:scale-98 after:content-[''] after:w-1/2 after:h-[400px] after:transition-all after:-left-20 after:absolute after:bg-white/10 relative overflow-hidden after:-top-20 after:rotate-10
                hover:after:translate-x-[200%] after:backdrop-blur-[0.5px] after:-translate-x-20 after:duration-200">
                    Send that text now
                </button>
            </div>

        </form>
    )
}

const Group = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col gap-2 has-invalid:bg-red-50 p-2 rounded-lg'>
            {children}
        </div>
    )
}

const Label = ({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.LabelHTMLAttributes<HTMLLabelElement>) => {
    return (
        <label
            {...props}
            className={cn("text-neutral-700 font-medium",
                className
            )}>{children}</label>
    )
}

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...props}
            className={cn('focus:outline-none border focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2  focus:border-neutral-300 focus:bg-gray-100 transition duration-200 border-transparent px-4 py-2 bg-white shadow-input rounded-lg placeholder::text-neutral-300',
                className
            )}

        />
    )
}