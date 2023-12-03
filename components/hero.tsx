import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {Image} from "@nextui-org/react";

function Hero() {
  return (
    <div className='w-full h-[55rem] mt-2 pt-2 border items-center justify-center'>
        <div className='mx-auto md:h-[15rem] md:justify-between md:items-center md:flex md:flex-row flex flex-col'>
            <div className='border md:w-[170rem] w-auto'>
                <h1 className="flex-1 font-poppins font-semibold text-[40px] lg:text-[70px] md:text-[90px] xl:text-[100px] ss:leading-[100.8px] md:leading-[90px]">
                    Football <br className="sm:block hidden" />{" "}
                    <span className="">Streaming platform</span>{" "}
                </h1>
            </div>
            <div className=' border '>
                <p className=' md:text-[15px] justify-end font-semibold items-end text-end text-gray-400'>
                    Customize your viewing preferences, create watchlists, and receive tailored recommendations based on your favorite teams, players, and leagues.
                </p>
                <a href="/" className='flex pt-4 items-end justify-end text-xl font-semibold mt-4 mr-2 hover:text'>
                    Watch Now  <ArrowRight className='ml-3 w-5 h-5 mb-1' />
                </a>
            </div>
        </div>
        <div className='border mx-3 h-[39rem] border-red-500'>
            <div className=' mx-auto w-auto'>
            <Image
                className='inline-block h-auto ring-4 '
                width={1100}
                alt="Champions league"
                src="https://www.mancity.com/meta/media/pxwd1nnt/li206578.png"
            />
            </div>
        </div>
    </div>
  )
}

export default Hero;