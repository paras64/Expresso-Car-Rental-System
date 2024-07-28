import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./component/styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  const NotfoundSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    h1 {
      font-size: 3rem;
      color: var(--text-color);
    }
    button {
      cursor: pointer;
      border: none;
      height: 3.5rem;
      width: 11rem;
      font-size: 23px;
      font-weight: bold;
      background-color: var(--btn-background-color);
      box-shadow: rgba(255, 83, 48, 0.35) 0px 10px 15px 0px;
      cursor: pointer;
      color: var(--white-color);
      border-radius: 10px;
    }
  `;
  return (
    <>
      <GlobalStyle />
      <NotfoundSection>
        <h1>404 Page not found</h1>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </button>
      </NotfoundSection>
    </>
  );
};

export default NotFound;
