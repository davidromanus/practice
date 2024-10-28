'use client';
import CreditCard from "@/components/payments/credit-card";
import NavBar from "../components/navigations/navbar";
import { HeartIcon, MessageCircleMore, Repeat2, SignalHighIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Halloween(){
    return(
        <div className="w-1/5 p-4 rounded-3xl border flex justify-between">
            <div>
            <MessageCircleMore className="text-gray-500 cursor-pointer"/>
            </div>
            <div>
            <Repeat2 className="text-gray-500 cursor-pointer"/>
            </div>
            <div>
            <HeartIcon className={`text-gray-500 cursor-pointer ${swap?'hidden':'flex'}`} onClick={()=>{setSwap(true)}}/>
            <Image src="/pumpkin.png" width={100} height={100} className={`w-6 h-6 ${swap?'flex':'hidden'}`} alt="pumpkin" onClick={()=>{setSwap(false)}}/>
            </div>
            <div>
            <SignalHighIcon className="text-gray-500 cursor-pointer"/>
            </div>
        </div>
    )
}