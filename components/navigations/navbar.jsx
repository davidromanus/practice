'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { AlignRightIcon, BriefcaseBusinessIcon, ChevronDown } from 'lucide-react';


export default function NavBar(){

    const [open,setOpen] = useState(false);

    return (
        <div className="w-full bg-white py-3 px-4 flex flex-col lg:flex-row">
            <div className='p-2'>
                <div className="flex justify-between" id="logo">
                    <Image src="/logo/logo.svg" width={200} height={200} className='w-24' alt='logo'/>
                    <span className='flex lg:hidden'>
                        <AlignRightIcon className='w-8' onClick={()=>{setOpen(!open)}}/>
                    </span>
                </div>
            </div>
            <div className="p-2 mt-5 lg:mt-0 lg:ml-14 hidden lg:flex" id="links">
                <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:gap-4">
                    <li>
                        <Link href="/" className="text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out cursor-pointer">Features</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out cursor-pointer">Community</Link>
                    </li>
                    {/*drop down*/}
                    <li className='relative group'>
                        <span className="text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out cursor-pointer flex flex-col">
                            <div className="flex gap-2">
                                Resources
                                <span><ChevronDown className="w-5 hidden lg:flex text-gray-500 group-hover:translate group-hover:-rotate-180"/></span>
                            </div>
                            {/*dropdown content*/}
                            <div className='w-[700px] shadow-lg rounded-sm bg-white absolute hidden lg:group-hover:block mt-4 p-2 transition duration-200 ease-in-out'>
                                <ul className='flex flex-row gap-2'>
                                    <li className="hover:bg-gray-50 cursor-pointer w-1/2">
                                        <Link href="/" className='flex flex-col space-y-0 p-2'>
                                            <BriefcaseBusinessIcon className='w-10 text-gray-500'/>
                                            <h4 className="text-xl text-black font-semibold">Generate Passport</h4>
                                            <p className="text-sm text-gray-400">Generate professional passports with our AI</p>
                                        </Link>
                                    </li>
                                    <li className="hover:bg-gray-50 cursor-pointer w-1/2">
                                        <Link href="/" className='flex flex-col space-y-0 p-2'>
                                            <BriefcaseBusinessIcon className='w-10 text-gray-500'/>
                                            <h4 className="text-xl text-black font-semibold">Generate Passport</h4>
                                            <p className="text-sm text-gray-400">Generate professional passports with our AI</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </span>
                    </li>
                    <li>
                        <Link href="/" className="text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out cursor-pointer">Pricing</Link>
                    </li>
                </ul>
            </div>
            <div className="mt-5 lg:mt-0 lg:ml-auto hidden lg:flex" id="button">
                <button className="p-2 w-full bg-green-500 hover:bg-green-600 transition duration-200 ease-in-out rounded-md text-white border px-10">Get Started</button>
            </div>
        </div>
    )
}