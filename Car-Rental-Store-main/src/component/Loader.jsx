import React from "react";
import styled from "styled-components";

const Loader = () => {
  const LoaderDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .loader-demo-box {
      border-radius: 0.25rem !important;
    }

    .loader-demo-box {
      width: 100%;
      height: 200px;
    }

    .jumping-dots-loader {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      position: relative;
      margin: 0 auto;
    }

    .jumping-dots-loader span {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: rgba(241, 83, 110, 0.8);
      margin: 35px 5px;
    }

    .jumping-dots-loader span:nth-child(1) {
      animation: bounce 1s ease-in-out infinite;
    }

    .jumping-dots-loader span:nth-child(2) {
      animation: bounce 1s ease-in-out 0.33s infinite;
    }

    .jumping-dots-loader span:nth-child(3) {
      animation: bounce 1s ease-in-out 0.66s infinite;
    }

    @keyframes bounce {
      0%,
      75%,
      100% {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
      }

      25% {
        -webkit-transform: translateY(-20px);
        -ms-transform: translateY(-20px);
        -o-transform: translateY(-20px);
        transform: translateY(-20px);
      }
    }
  `;
  return (
    <>
      <LoaderDiv>
        <div class="jumping-dots-loader">
          {" "}
          <span></span> <span></span> <span></span>{" "}
        </div>
        <div class="moving-gradient"></div>
      </LoaderDiv>
    </>
  );
};

export default Loader;
