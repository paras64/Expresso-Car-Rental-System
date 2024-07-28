import React from "react";
import styled from "styled-components";
import FirstProcess from "../images/HowWorksImages/first.jpg";
import SecondProcess from "../images/HowWorksImages/second.jpg";
import ThirdProcess from "../images/HowWorksImages/third.jpg";
export default function HowWorks() {
  const Mainsection = styled.section`
    .howProcess {
      height: 135rem;
    }

    .howProcess-Container {
      display: flex;
      flex-direction: column;
      font-family: Poppins, sans;
    }

    .howProcess-heading {
      font-size: 2.2rem;
      letter-spacing: 1px;
      text-transform: capitalize;
      text-align: center;
    }
    .howProcess-heading-sub-heading {
      text-align: center;
      font-size: 1.65rem;
      text-transform: capitalize;
    }
    .howProcess-heading-para {
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 22px;
      font-weight: 300;
      text-align: center;
      margin: 10px;
      padding: 0 20rem;
    }

    .howProcess-process-container {
      /* border: 2px solid; */
      position: relative;
      top: 4rem;
      padding: 2rem 5rem;
      height: 120rem;
    }

    .howProcess-process-container-hero {
      display: flex;
      flex-direction: column;
    }

    .left-side-hero {
      display: flex;
    }

    .text-hero-container {
      display: flex;
      flex-direction: column;
      background-color: var(--black-color);
      justify-content: center;
      color: var(--white-color);
      padding: 6rem;
      position: relative;
      height: 30rem;
      top: 12rem;
    }

    .text-hero-container h1 {
      font-size: 2.9rem;
      font-family: "Poppins", serif;
      line-height: 3.5rem;
    }

    .text-hero-container p {
      position: relative;
      top: 3rem;
      font-size: 1rem;
      font-family: "Rubik", serif;
    }

    .img-hero-container {
      width: 450px;
      height: 561px;
      object-fit: cover;
      object-position: 50% 50%;
    }

    .img-hero-container img {
      height: 39rem;
      width: 28rem;
      box-shadow: 0 0 0 #000;
      position: static;
      user-select: none;
    }

    .right-side-hero {
      display: flex;
      flex-direction: row;
      justify-content: center;
      color: var(--white-color);
    }
  `;

  return (
    <>
      <Mainsection className="howProcessWorks">
        <div className="howProcess">
          <div className="howProcess-Container">
            <h2 className="howProcess-heading-sub-heading"> Lorem ipsum </h2>
            <h1 className="howProcess-heading">How the Process Works</h1>
            <p className="howProcess-heading-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              atque maxime tempore natus. Odio, nam.
            </p>
            <div className="howProcess-process-container">
              <div className="howProcess-process-container-hero">
                <div className="left-side-hero">
                  <div className="text-hero-container">
                    <h1>Reservation & Vehical Selection</h1>
                    <p>
                      Making a reservation is a crucial step as it ensures that
                      a vehicle will be available for you when you need it. By
                      reserving in advance, you can secure your preferred car
                      type or model, especially during peak seasons or
                      high-demand periods. It allows the dealership to prepare
                      the necessary paperwork and ensures a smoother rental
                      experience.
                    </p>
                  </div>
                  <div className="img-hero-container">
                    <img src={FirstProcess} alt="" />
                  </div>
                </div>
                <div className="right-side-hero">
                  <div className="img-hero-container">
                    <img src={SecondProcess} alt="" />
                  </div>
                  <div className="text-hero-container">
                    <h1>Payment & Agreement</h1>
                    <p>
                      Providing the required identification documents and
                      signing the rental agreement are essential for the rental
                      process. This step ensures that you meet the legal
                      requirements to rent a vehicle and clarifies the terms and
                      conditions of the rental. It's important to carefully
                      review the agreement, including insurance coverage
                      options, mileage limits, fuel policies, and any additional
                      fees, to avoid any misunderstandings or unexpected
                      charges.
                    </p>
                  </div>
                </div>
                <div className="left-side-hero">
                  <div className="text-hero-container">
                    <h1>Vehicle Inspection & Return</h1>
                    <p>
                      Conducting a thorough vehicle inspection before and after
                      the rental period is vital. Before receiving the vehicle,
                      inspect it with the dealership representative and document
                      any existing damage to avoid being held responsible for it
                      later. Similarly, when returning the vehicle, go through
                      another inspection to determine if any new damage occurred
                      during your rental period. This step ensures transparency
                      and helps in resolving any disputes regarding vehicle
                      condition and potential charges accurately.
                    </p>
                  </div>
                  <div className="img-hero-container">
                    <img src={ThirdProcess} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Mainsection>
    </>
  );
}
