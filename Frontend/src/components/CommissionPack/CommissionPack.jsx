import "./CommissionPack.css";
import img1 from "../../assets/48.jpg";
import  { useRef, useEffect } from 'react';
import videoFile1 from "../../assets/pet-dog-1.mp4"

const CommissionPack = () => {
  

  const videoRef1 = useRef(null);

  useEffect(() => {
    const video = videoRef1.current;
    
    // Preload video for smoother playback
    video.load();
    
    // Handle the loop transition
    const handleTimeUpdate = () => {
      // Add a small buffer (0.5s) before the end to restart
      if (video.currentTime > video.duration - 0.5) {
        video.currentTime = 0;
        video.play().catch(e => console.log('Autoplay prevented:', e));
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);


    return(
       <div className="container-1">
        <div className="content-1">
            <div className="title-0">
              Adoption Boost Plans
            </div>
            <img src={img1} alt="" className="img-1"/>
     </div>

     <div className="content-sub">

      <div className="video-background1">

            <video ref={videoRef1}
              autoPlay
              muted
              playsInline
              preload="auto"
            >
                <source src={videoFile1} type="video/mp4" />
      
      </video>
      </div>

      <div className="des">At Barking Shelter, we believe that every pet and every adopter deserves a service that fits their unique journey. That’s why our Commission Packages are thoughtfully designed to suit a wide range of needs—whether you're a first-time pet adopter, a regular seller, or a rescue organization. Our packages offer flexibility, transparency, and support, ensuring you get the right services without any hidden costs or complications. From basic listings to premium features that boost visibility and trust, we’ve got a plan that works for you. With Barking Shelter, you’re not just choosing a package—you’re joining a compassionate community built around safe, successful pet adoptions.

      </div>
      
     
     </div>


        <div className="content-2">
          <div className="title1">Package</div>
          <div className="title1">Ideal For</div>
          <div className="title1">Features</div>
          <div className="title1">Commission</div>

      
          <div className="row1">Basic</div>
          <div className="row1">First-time sellers</div>
          <div className="row1">1 active listing, 14-day duration, standard visibility, community support only</div>
          <div className="row1">5%</div>
             




          <div className="row2">Standard</div>
          <div className="row2">Casual rehomers</div>
          <div className="row2">Up to 3 listings, 30-day duration, premium badge, access to listing performance analytics</div>
          <div className="row2">10%</div>



          <div className="row3">Premium</div>
          <div className="row3">Professional breeders</div>
          <div className="row3">Unlimited listings, 60-day duration, featured placement, auto-boost, priority chat support</div>
          <div className="row3">15%</div>

         


          <div className="row4">Enterprise</div>
          <div className="row4">Shelters/Rescue partners</div>
          <div className="row4">Custom integrations, API access, advanced analytics, dedicated account manager</div>
          <div className="row4">Custom</div>
           
        </div>
      </div> 
    
        
    )
    }

export default CommissionPack;