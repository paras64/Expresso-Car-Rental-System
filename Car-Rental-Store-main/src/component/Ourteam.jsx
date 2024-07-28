import React from "react";
import AboutHome from "./AboutSectionComponents/AboutHome";
import Navbar from "./Navbar";
import Footer from './Footer'
import Team from "./OurteamComponent/Team";
import TimeLine from "./AboutSectionComponents/TimeLine";
const Ourteam = () => {
  return (
    <>
      <Navbar />
      <AboutHome
        img={
          "https://media.istockphoto.com/id/1205454396/photo/happy-diverse-employees-team-joining-fists-celebrating-success.jpg?s=612x612&w=0&k=20&c=ictexZMWxNk7QyiBpoa67nROL5PlS8xRBJc3s65U08g="
        }
        headingText={"Creating Tomorrow,"}
        spanText={" Today."}
        Subheading={"Transforming Visions into Reality."}
      />
      <Team />
      <TimeLine />
      <Footer />
    </>
  );
};

export default Ourteam;
