import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[50rem] mt-2 pt-2 border items-center justify-center'>
        <div className='mx-auto md:h-[15rem] md:justify-between md:items-center md:flex md:flex-row flex flex-col'>
            <div className='border md:w-[170rem] w-auto'>
                <h1 className="flex-1 font-poppins font-semibold text-[40px] lg:text-[70px] md:text-[90px] ss:leading-[100.8px] md:leading-[90px]">
                    Football <br className="sm:block hidden" />{" "}
                    <span className="">Streaming platform</span>{" "}
                </h1>
            </div>
            <div className=' border '>
                <p className=' md:text-[15px] justify-end font-semibold items-end text-end text-gray-400'>
                    Customize your viewing preferences, create watchlists, and receive tailored recommendations based on your favorite teams, players, and leagues.
                </p>
                <a href="/" className='flex pt-4 items-end justify-end text-xl font-semibold mt-4 mr-2'>
                    Watch Now  <ArrowRight className='ml-3 w-5 h-5 mb-1' />
                </a>
            </div>
        </div>
        <div className=' mt-1 border mx-2 h-[33rem] border-red-500'>

        </div>
    </div>
  )
}

export default Hero;