
'use client';

import Image from "next/image";
import { CustomButton }  from "../components";

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className="hero items-center">
            <div className="flex-1 pt-24 lg:pt-0 padding-x">
                <h1 className="hero__title xl:text-[50px] 2xl:text-[60px] lg:mt-20">
                    Search, reserve or rent a car quickly and easily.
                </h1>

                <p className="hero__subtitle xl:text-[25px]">
                Streamline your car rental experience with our easy booking process.
                </p>

                <CustomButton 
                    title="Explore cars"
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={handleScroll}
                    btnType="button"
                />
            </div>


            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero"
                    fill className="object-contain" />
                </div>

                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero;