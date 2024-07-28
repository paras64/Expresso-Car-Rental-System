import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Team = () => {
  const IconStyle = {
    borderRadius: "7px",
    cursor: "pointer",
    color: "var(--btn-background-color)",
    boxShadow: "rgba(23, 23, 23, 0.24) 0px 1px 3px",
  };
  const TeamSection = styled.section`
    /* border: 2px solid; */
    width: 100%;
    padding: 0 3rem;
    margin-bottom: 6rem;

    .team__container {
      /* border: 2px solid; */
      padding: 0 3rem;
    }
    .team__content {
      /* border: 2px solid; */
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .heading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .heading h1 {
      font-size: 25px;
      font-family: poppins, "sans-serif";
    }
    .heading h2 {
      font-size: 2.2rem;
      line-height: 4rem;
      letter-spacing: 1px;
      text-transform: capitalize;
      font-family: poppins, "sans-serif";
    }
    .heading p {
      color: var(--text-color);
      letter-spacing: 0px;
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 29px;
      font-weight: 500;
      text-align: center;
      width: 38rem;
    }
    .team_box {
      height: auto;
      margin-top: 3rem;
      /* border: 2px solid; */
      display: flex;
      flex-direction: row;
      /* align-items: center; */
      justify-content: space-between;
      gap: 5rem 0;
      flex-wrap: wrap;
    }
    .members__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
      /* border: 2px solid; */
      border-radius: 10px;
      height: 30rem;
      width: auto;
      overflow: hidden;
    }
    .members__box img {
      height: 24rem;
      width: 17rem;
    }
    .person__name {
      display: flex;
      width: 100%;
      /* border: 2px solid; */
      justify-content: space-between;
      padding: 10px 13px;
    }
    .person__name h1 {
      font-size: 19px;
      font-family: "Poppins";
    }
    .icons {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }
    .members__box p {
      font-size: 16px;
      font-family: "Rubik";
      color: var(--text-color);
      width: 100%;
      padding: 0px 13px;
    }
  `;
  return (
    <TeamSection>
      <div className="team__container">
        <div className="team__content">
          <div className="heading">
            <h1>Our Team</h1>
            <h2>Get to know us closer</h2>
            <p>
              {" "}
              Our collective expertise and diverse backgrounds drive the success
              and innovation you see in our products/services.{" "}
            </p>
          </div>
          <div className="team_box">
            <div className="members__box">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="members__img"
              />
              <aside className="person__name">
                <h1>Alexa Kocher</h1>
                <div className="icons">
                  <InstagramIcon style={IconStyle} />
                  <TwitterIcon style={IconStyle} />
                </div>
              </aside>
              <p className="person__role">Executive Manager & CEO</p>
            </div>
            <div className="members__box">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="members__img"
              />
              <aside className="person__name">
                <h1>Luke Miller</h1>
                <div className="icons">
                  <InstagramIcon style={IconStyle} />
                  <TwitterIcon style={IconStyle} />
                </div>
              </aside>
              <p>Car Detailist</p>
            </div>
            <div className="members__box">
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="members__img"
              />
              <aside className="person__name">
                <h1>Michael Horan</h1>
                <div className="icons">
                  <InstagramIcon style={IconStyle} />
                  <TwitterIcon style={IconStyle} />
                </div>
              </aside>
              <p>Logistics Coordinator</p>
            </div>
            <div className="members__box">
              <img
                src="https://images.pexels.com/photos/3453083/pexels-photo-3453083.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="members__img"
              />
              <aside className="person__name">
                <h1>Migel Auran</h1>
                <div className="icons">
                  <InstagramIcon style={IconStyle} />
                  <TwitterIcon style={IconStyle} />
                </div>
              </aside>
              <p>Data Analyst</p>
            </div>
            <div className="members__box">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="members__img"
              />
              <aside className="person__name">
                <h1>Allen James</h1>
                <div className="icons">
                  <InstagramIcon style={IconStyle} />
                  <TwitterIcon style={IconStyle} />
                </div>
              </aside>
              <p>Safety Officer</p>
            </div>
            <div className="members__box">
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="members__img"
              />
              <aside className="person__name">
                <h1>Robert Aston</h1>
                <div className="icons">
                  <InstagramIcon style={IconStyle} />
                  <TwitterIcon style={IconStyle} />
                </div>
              </aside>
              <p>Salesman</p>
            </div>
            <div className="members__box">
              <img
                src="https://images.pexels.com/photos/936090/pexels-photo-936090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="members__img"
              />
              <aside className="person__name">
                <h1>Yasser Arafat</h1>
                <div className="icons">
                  <InstagramIcon style={IconStyle} />
                  <TwitterIcon style={IconStyle} />
                </div>
              </aside>
              <p>Media Manager</p>
            </div>
            <div className="members__box">
              <img
                src="https://images.pexels.com/photos/8937614/pexels-photo-8937614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="members__img"
              />
              <aside className="person__name">
                <h1>Stefan Topalovic</h1>
                <div className="icons">
                  <InstagramIcon style={IconStyle} />
                  <TwitterIcon style={IconStyle} />
                </div>
              </aside>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </TeamSection>
  );
};

export default Team;
