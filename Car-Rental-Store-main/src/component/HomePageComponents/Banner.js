import React from "react";
import styled from "styled-components";
import MahindraImage from "../images/banner/tesla.png";
import MercedesImage from "../images/banner/Mercedes_logo_PNG19.png";
import lamboImage from "../images/banner/Lamborghini_logo_PNG1.png";
import PorcheImage from "../images/banner/Porsche_logo_PNG5.png";
import ScionImage from "../images/banner/Scion_logo_PNG8.png";
import LexusImage from "../images/banner/Lexus_logo_PNG9.png";
import VolkswagenImage from "../images/banner/Volkswagen_logo_PNG9.png";
import GroupCars from "../images/banner/pngaaa.png";
import bg from "../images/banner/bg-1.png";
import { GlobalStyle } from "../styles/GlobalStyle";
import img from "../images/Download-app/pngegg.png";

import download from "../images//Download-app/download-img-2.png";
import googlePlay from "../images/Download-app/google play.png";
import appStore from "../images/Download-app/app store.png";

export const BannerBand = () => {
  const BannerContent = styled.div`
    height: 6rem;
    width: 100%;
    border-radius: 20px;
    background-color: #2b2323;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;

    .bannerImg img {
      height: 50px;
      width: 53px;
    }
  `;

  return (
    <>
      <BannerContent className="banner-content">
        <div className="bannerImg">
          <img src={LexusImage} alt="This is an image" />
        </div>
        <div className="bannerImg">
          <img src={MahindraImage} alt="This is an image" />
        </div>
        <div className="bannerImg">
          <img src={MercedesImage} alt="This is an image" />
        </div>
        <div className="bannerImg">
          <img src={lamboImage} alt="This is an image" />
        </div>
        <div className="bannerImg">
          <img src={PorcheImage} alt="This is an image" />
        </div>
        <div className="bannerImg">
          <img src={ScionImage} alt="This is an image" />
        </div>
        <div className="bannerImg">
          <img src={VolkswagenImage} alt="This is an image" />
        </div>
      </BannerContent>
    </>
  );
};

export default function Banner() {
  const Banner = styled.section`
    height: 133rem;
    width: 100%;
    /* border: 2px solid; */

    .banner-container {
      background: url(${bg});
      background-repeat: no-repeat;
      background-size: cover;
      height: 50rem;
      width: 100%;
      /* border: 2px solid; */
      padding: 0rem 4rem 2rem 4rem;
    }
    /* border: 2px solid; */

    .group-banner-img {
      width: 100%;
      position: relative;
      top: 6rem;
    }
    .download {
      background-color: var(--page-background-color);
      height: 54rem;
      padding: 7rem 0 0 0;
      /* border: 2px solid; */
    }
    .download-container {
      height: 47rem;
      display: flex;
      /* align-items: center; */
      /* justify-content: center; */
    }
    .download-img {
      /* border: 2px solid; */
      background: url(${img});
      background-repeat: no-repeat;
      background-position: 20px -70px;
      background-size: 46rem 45rem;
      height: 43rem;
      width: 50rem;
    }
    .download-img img {
      height: 36rem;
      width: 45rem;
    }
    .download-content {
      display: flex;
      flex-direction: column;
      position: relative;
      top: 5rem;
      padding-right: 3rem;
      gap: 22px;
    }
    .download-content h1 {
      font-size: 2.5rem;
      letter-spacing: 1px;
      text-transform: capitalize;
      text-align: center;
      font-family: "poppins", sans-serif;
    }
    .download-content p {
      color: var(--text-color);
      font-family: "Rubik", sans-serif;
      font-size: 18px;
      line-height: 22px;
      font-weight: 300;
      text-align: center;
      margin: 10px;
    }
    .download-links {
      /* border: 2px solid; */
      height: 5rem;
      width: 100%;
      display: flex;
      gap: 20px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 10px;
    }
    .download-links img {
      height: 5rem;
      width: 16rem;
    }
    .google-maps-images {
      width: 100%;
      height: 450px;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Banner className="banner">
        <div className="banner-container">
          <BannerBand />
          <div>
            <img
              className="group-banner-img"
              src={GroupCars}
              alt="group cars"
            />
          </div>
        </div>
        <section className="download" id="download">
          <div className="download-container">
            <div className="download-img">
              <img src={download} alt="download-our-app" />
            </div>
            <div className="download-content">
              <h1>Download our app to get most out of it!!</h1>
              <p>
                Download Our App and unlock a world of convenience at your
                fingertips. Whether you're on the go or relaxing at home, our
                app offers a seamless way to access our services and stay
                connected. Don't miss out on the ease and efficiency – Download
                Our App now and enjoy the ultimate convenience of modern
                technology."
              </p>

              <div className="download-links">
                <a href="https://car-rental-store.vercel.app/" target="_blank">
                  <img src={googlePlay} alt="download-now" />
                </a>
                <a href="https://car-rental-store.vercel.app/" target="_blank">
                  <img src={appStore} alt="download-now" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="google-maps-images" id="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2507913563077!2d77.81466497510775!3d23.523480578825883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c046104f25955%3A0xa3dd1411270920fe!2sSherpura%20Rd%2C%20Sherpura%2C%20Vidisha%2C%20Madhya%20Pradesh%20464001!5e0!3m2!1sen!2sin!4v1715171249252!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="..."
          ></iframe>
        </section>
      </Banner>
    </>
  );
}
