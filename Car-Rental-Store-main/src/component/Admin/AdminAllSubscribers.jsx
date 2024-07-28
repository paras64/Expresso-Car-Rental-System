import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAdminDataContext } from "./AdminProvider";
const AdminAllSubscribers = () => {
  const [Subscribers, SetSubscribers] = useState([]);
  const { adminData } = useAdminDataContext();
  const getAllSubscribersData = () => {
    const doc = axios.get(
      `https://car-rental-backend-1tpp.onrender.com/subscribe/getallsubs/${adminData.token}`
    );
    doc
      .then((data) => {
        SetSubscribers(data.data.doc);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  useEffect(() => {
    getAllSubscribersData();
  }, []);

  const AdminAllSubscribersSection = styled.section`
    width: 100%;
    margin-top: 2rem;
    padding: 1rem 4rem;
    .All_subsrciber__container {
      display: flex;
      width: 100%;
    }
    .All_subsrciber__content {
      /* border: 3px solid; */
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .all__sub__container__heading {
      font-size: 1.8rem;
      font-family: Poppins;
      color: var(--btn-background-color);
    }
    .all__sub_hero {
      display: flex;
      flex-direction: row;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      height: 5rem;
      width: 100%;
      border-radius: 5px;
      padding: 1rem 2rem;
      box-shadow: rgba(23, 23, 23, 0.24) 0px 1px 3px;
      overflow: hidden;
      background-color: var(--page-background-color);
    }
    .all__sub_hero_crypus {
      display: flex;
      flex-direction: column;
      font-style: Poppins;
      gap: 5px;
      width: 10rem;
      align-items: center;
      justify-content: center;
    }
    .all__sub_hero_crypus h1 {
      font-size: 16px;
      color: var(--black-color);
      font-family: "Poppins";
    }
    .all__sub_hero_crypus p {
      font-size: 15px;
      color: var(--text-color);
      font-family: Rubik;
    }
    .all_sub__link_btn {
      border: none;
      background: transparent;
      color: blue;
      font-size: 16px;
      font-family: "Rubik";
      font-weight: bolder;
      cursor: pointer;
    }
  `;

  return (
    <AdminAllSubscribersSection>
      {/* {Subscribers.length ? ( */}
      <div className="All_subsrciber__container">
        <div className="All_subsrciber__content">
          <h1 className="all__sub__container__heading">All Subscribers</h1>
          {Subscribers && Subscribers.length ? (
            Subscribers.map((items) => (
              <aside className="all__sub_hero" key={items.id}>
                <div className="all__sub_hero_crypus">
                  <h1>Customer Name</h1>
                  <p>{items.fullname}</p>
                </div>
                <div className="all__sub_hero_crypus">
                  <h1>Email</h1>
                  <p>{items.email}</p>
                </div>
                <div className="all__sub_hero_crypus">
                  <button
                    className="all_sub__link_btn"
                    onClick={() => {
                      alert("Offer has been sent");
                    }}
                  >
                    Send Offer
                  </button>
                </div>
                <div className="all__sub_hero_crypus">
                  <button
                    className="all_sub__link_btn"
                    onClick={() => {
                      alert("Email has been sent");
                    }}
                  >
                    Send Email
                  </button>
                </div>
                <div className="all__sub_hero_crypus">
                  <button
                    className="all_sub__link_btn"
                    onClick={() => {
                      alert("Newsletter Link has been sent");
                    }}
                  >
                    Send Newsletter
                  </button>
                </div>
              </aside>
            ))
          ) : (
            <p>No subscribers found.</p>
          )}
        </div>
      </div>
    </AdminAllSubscribersSection>
  );
};

export default AdminAllSubscribers;
