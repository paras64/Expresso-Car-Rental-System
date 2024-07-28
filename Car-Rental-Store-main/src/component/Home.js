import React from "react";
import HomeSection from "./HomePageComponents/HomeSection";
import Navbar from './Navbar';
import Service from "./HomePageComponents/Service";
import Booking from "./HomePageComponents/Booking";
import WhyUs from "./HomePageComponents/WhyUs";
import VehicalCollection from "./HomePageComponents/VehicalCollection";
import HowWorks from "./HomePageComponents/HowWorks";
import Testimonial from "./HomePageComponents/Testimonial";
import FaqsAccordian from "./HomePageComponents/FaqsAccordian";
import Banner from "./HomePageComponents/Banner";
import Footer from "./Footer";
import { AiFillCar } from "react-icons/ai";
import { FaPiggyBank, FaThumbsUp } from "react-icons/fa";

export default function App() {
  return (
    <>
      <Navbar/>   
      
      <HomeSection />
      <Service />
      <Booking vaild={false} />
      <WhyUs
        title={"Why Choose Us"}
        semiTitle={
          "From short day trips to long family vacations, we have the perfect car for you."
        }
        para={
          "Our car rental store offers a convenient and affordable solution for your transportation needs. With a variety of vehicles to choose from and flexible rental periods, we make it easy for you to get around.From short day trips to long family vacations, we have the perfect car for you."
        }
        icon1={<AiFillCar />}
        icon2={<FaPiggyBank />}
        icon3={<FaThumbsUp />}
        point1={"Wide range of vehicles"}
        point2={"Competitive pricing"}
        point3={"Exceptional service"}
        point1para={
          "We offer a wide selection of well-maintained vehicles to meet the diverse needs of our customers, from small economy cars to luxurious SUVs."
        }
        point2para={
          "Our pricing is highly competitive, ensuring that you get the best value for your money."
        }
        point3para={
          "Our friendly and knowledgeable staff is always ready to assist you in making the right ice and providing any necessary support during your rental period."
        }
      />
      <VehicalCollection />
      <HowWorks />
      <Testimonial />
      <FaqsAccordian />
      <Banner />
      <Footer />
    </>
  );
}
