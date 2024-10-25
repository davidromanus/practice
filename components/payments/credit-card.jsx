'use client';
import { Check, LockKeyholeIcon, LockKeyholeOpenIcon } from "lucide-react";
import { useState } from "react"

export default function CreditCard(){

  const [cardNumber,setCardNumber] = useState('');
  const [toggle,setToggle] = useState(false);

  function formatCardNumber(value){
    const sanitizedValue = value.replace(/\D/g, '');
    const formattedValue = sanitizedValue.replace(/(.{4})/g,'$1 ').trim();

    setCardNumber(formattedValue);
  };

  return (
      <div className="bg-white w-full lg:w-2/6 max-w-screen-lg rounded-xl px-8 py-4">
        <div className="flex justify-between">
          <div className="side relative">
            <div className="w-8 h-8 p-2 rounded-full bg-green-500 flex justify-center items-center">
              <Check className="w-5 text-white"/>
            </div>
          </div>
          <div className="side-incomplete relative">
            <div className="w-8 h-8 p-2 rounded-full bg-blue-500 flex justify-center items-center">
              <LockKeyholeOpenIcon className="w-5 text-white"/>
            </div>
          </div>
          <div className="relative">
            <div className="w-8 h-8 p-2 rounded-full bg-gray-200 flex justify-center items-center">
              <LockKeyholeIcon className="w-5 text-gray-500"/>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <form id="creditCardForm">
            <div className="flex-col space-y-2 mt-4">
              <label className="font-medium text-sm">Card holder</label>
              <input 
                type="text" 
                className="peer w-full px-4 py-4 rounded-lg bg-gray-50 placeholder:text-sm placeholder:text-gray-400 text-sm font-medium outline outline-gray-100 border-none" 
                placeholder="Your name and Surname"
              />
            </div>
            <div className="flex-col space-y-2 mt-5">
              <label className="font-medium text-sm">Card Number</label>
              <input 
                type="text" 
                maxLength={19} 
                value={cardNumber} 
                onChange={(e)=>{formatCardNumber(e.target.value)}} 
                className="peer w-full px-4 py-4 rounded-lg bg-gray-50 placeholder:text-sm placeholder:text-gray-400 text-sm font-medium outline outline-gray-100 border-none" 
                placeholder="**** **** **** ****"
              />
            </div>
            <div className="flex space-x-5 mt-5">
              <div className="w-1/2 flex-col space-y-2">
                <label className="font-medium text-sm">Card Number</label>
                <input 
                  type="month"  
                  className="peer w-full px-4 py-4 rounded-lg bg-gray-50 placeholder:text-sm placeholder:text-gray-400 text-sm font-medium outline outline-gray-100 border-none" 
                  placeholder="Month/Year"
                />
              </div>
              <div className="w-1/2 flex-col space-y-2">
                <label className="font-medium text-sm">Card Number</label>
                <input 
                  type="number"
                  maxLength={3}  
                  className="peer w-full px-4 py-4 rounded-lg bg-gray-50 placeholder:text-sm placeholder:text-gray-400 text-sm font-medium outline outline-gray-100 border-none" 
                  placeholder="***"
                />
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-sm font-medium">Save card data for future payment</p>
              <div className="toggle relative inline-block w-12 h-6 bg-blue-300 rounded-full cursor-pointer" onClick={()=>{setToggle(!toggle)}}>
                <div id="indicator" className={`absolute ${toggle?'right-0':'left-0'} w-6 h-6 bg-blue-800 rounded-full`}></div>
              </div>
            </div>
            <div className="mt-8">
              <button className="p-3 rounded-full bg-blue-700 hover:bg-blue-800 transition ease-in-out duration-300 text-white w-full">Pay Now</button>
            </div>
          </form>
        </div>
      </div>
  )
}