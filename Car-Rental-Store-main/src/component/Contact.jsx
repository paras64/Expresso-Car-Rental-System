import React from "react";
import Navbar from "./Navbar";
import AboutHome from "./AboutSectionComponents/AboutHome";
import Footer from "./Footer";
import FaqsAccordian from "./HomePageComponents/FaqsAccordian";
import TestimonialForm from './TestimonialComponent/TestimonialForm'

const Contact = () => {
  return (
    <>
      <Navbar />
      <AboutHome
        headingText={"Have Doubts?, "}
        spanText={"Reach."}
        Subheading={"Available 24/7 to solve your problems"}
        img={
          "https://images.pexels.com/photos/225232/pexels-photo-225232.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      />
     <TestimonialForm />
      <FaqsAccordian />
      <section className="google-maps-images" id="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117756.85248567844!2d75.65771979726566!3d22.731897000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdc859bc94ab%3A0xdb2d9bb53213f853!2sCar%20Rental!5e0!3m2!1sen!2sin!4v1685815339461!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="..."
        ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
