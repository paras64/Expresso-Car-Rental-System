import React from "react";
import styled from "styled-components";
import Testimonial from "./HomePageComponents/Testimonial";
import AboutHome from "./AboutSectionComponents/AboutHome";
import TestimonialHome from "./TestimonialComponent/TestimonialHome";
import Footer from "./Footer";
import WhyUs from "./HomePageComponents/WhyUs";
import Navbar from "./Navbar";
import TestimonialForm from "./TestimonialComponent/TestimonialForm";
import { AiFillCar } from "react-icons/ai";
import { FaPiggyBank, FaThumbsUp } from "react-icons/fa";
const TestimonialComponent = () => {
  const TestimonialComponent = styled.section``;

  return (
    <>
      <Navbar />
      <AboutHome
        img={
          "https://www.fvw.de/news/media/22/Smartphone-Sunny-Cars-212494-detailp.jpeg"
        }
        headingText={"Ride, Love, "}
        spanText={"Repeat."}
        Subheading={"Driving Dreams, Happy Clients"}
      />
      <TestimonialHome />
      <Testimonial />

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
      <TestimonialForm />
      <Footer />
    </>
  );
};

export default TestimonialComponent;
