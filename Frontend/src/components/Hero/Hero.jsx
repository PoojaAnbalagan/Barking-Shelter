import { useState, useEffect } from "react";
import './Hero.css'

import profile_img_4 from '../../assets/44.jpg'
import profile_img_5 from '../../assets/15.jpg'
import profile_img_6 from '../../assets/17.jpg'
import i1 from '../../assets/20-1.jpg'
import i2 from '../../assets/3.jpeg'
import i3 from '../../assets/4.jpeg'
import i4 from '../../assets/5.jpeg'
import i5 from '../../assets/7.jpeg'
import i6 from '../../assets/20-0.jpg'
import i7 from '../../assets/19-0.jpg'
import i8 from '../../assets/19-1.jpg'
import i9 from '../../assets/19-2.jpg'
import i10 from '../../assets/19.jpg'


const Hero = () => {
    const images = [profile_img_4, profile_img_5, profile_img_6];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);




    return (
        <div className='hero'>
            <div className="slideshow">
                <img width="100%"
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="slideshow-image"
                />


            </div>

            <center>
                <h1 className='heading1'> Your Perfect Pup Awaits .....   </h1>
                <p className='p1'>A sanctuary of compassion where devoted canines meet their families, fostering profound connections and nurturing the promise of unconditional love in forever homes. </p>
            </center>

            <div className="sub-contain-1">


                <div className="sub-title-0">
                    From Loving Homes to Lasting Bonds
                    <div className="span-1">
                        When life changes, some pet owners must part ways with their beloved dogs—entrusting us to find them a future filled with care and connection.<br /><br />
                        At Barking-Shelter, we bridge hearts by matching these cherished companions with families who can continue their journey of love. Each dog comes from a home filled with memories, and they're ready to create new ones with you.
                    </div>
                </div>

                <div className="image-set">
                    <img src={i7} />
                    <img src={i8} />
                    <img src={i9}  className="image-9"/>
                    <img src={i10}  className="image-9"/>
                </div>

            </div>

            <div className="sub-contain">
                <div className="sub-1">Hearts Without Price: Giving Street Dogs a Second Chance </div>

                <div className="Images">
                    <img src={i1} className="image-1" />
                    <img src={i2} className="image-1"/>
                    <img src={i3} className="image-1"/>
                    <img src={i4} className="image-6"/>
                    <img src={i5} className="image-6"/>
                    <img src={i6} className="image-6"/>
                </div>

    


            </div>
        </div>

    )
}

export default Hero