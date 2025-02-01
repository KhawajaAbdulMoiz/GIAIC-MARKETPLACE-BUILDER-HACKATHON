"use client"
import HeroSection from "./Hero-Section/page";
import AboutUs from "./About-Section/page";
import Category from "./Category-Section/page";
import ChooseUS from "./ChooseUs/page";
import Testimonial from "./Testimonials/page";
import LatestBlogs from "./LatestBlogs/page";
import MeetOurChefs from "./Chefs/page";





export default function Home() {
  return (
    <div>
  
      <HeroSection/>
      <AboutUs/>
      <Category/>
      <ChooseUS/>
      <MeetOurChefs/>
      <Testimonial/>
      <LatestBlogs/>
     

    </div>
  );
}
