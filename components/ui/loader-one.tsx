import React from 'react'
import { motion } from "framer-motion";


const LoaderOne = () => {
    return (
        <div className="flex gap-2 items-center justify-center h-screen">
        <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce-smooth"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500 animate-bounce-smooth delay-400"></div>
        <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce-smooth delay-200"></div>
      </div>
      
    )
}

export default LoaderOne
