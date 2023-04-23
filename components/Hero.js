import { useState , useEffect } from "react";
import HeroText from "./HeroText";

const Hero = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <HeroText />
        </div>
    )
}


export default Hero;