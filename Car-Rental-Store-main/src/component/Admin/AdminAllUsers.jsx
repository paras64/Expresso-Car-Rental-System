import React, { useState } from "react";
import { useAllUserContext } from "./AllUserProvider";
import styled from "styled-components";
import axios from "axios";
import { useAdminDataContext } from "./AdminProvider";
const AdminAllUsers = () => {
  const { Users } = useAllUserContext();
  const { adminData } = useAdminDataContext();
  const [Active, setActive] = useState(null);
  const handleDelete = (ID) => {
    const doc = axios.delete(
      `https://car-rental-backend-1tpp.onrender.com/user/deleteuser/${ID}/${adminData.token}`
    );
    doc
      .then((response) => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
        window.location.reload();
      });
  };
  const AdminAllUsersSection = styled.section`
    height: 100%;
    width: 100%;
    padding: 2rem 1.5rem;
    .all_users__container {
      /* border: 2px solid; */
      display: flex;
      width: 100%;
    }
    .all_users__content {
      /* border: 3px solid; */
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .allusers_content_crypus {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: rgba(23, 23, 23, 0.24) 0px 1px 3px;
    }
    .all__users__optimus {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 3rem;
    }
    .all__users__content__prime {
      display: flex;
      flex-direction: column;
      font-style: Poppins;
      gap: 5px;
      width: 10rem;
      align-items: center;
      justify-content: center;
    }
    .all__users__content__prime h1 {
      font-size: 16px;
      color: var(--black-color);
      font-family: "Poppins";
    }
    .all__users__content__prime p {
      font-size: 15px;
      color: var(--text-color);
      font-family: Rubik;
      text-align: center;
    }
    .all__users__content__prime__btn {
      border: none;
      background: transparent;
      color: blue;
      font-size: 16px;
      font-family: "Rubik";
      font-weight: bolder;
      cursor: pointer;
    }
    .all__user_heading {
      font-size: 1.8rem;
      font-family: Poppins;
      color: var(--btn-background-color);
    }
    .all__users__orders_container {
      background-color: var(--page-background-color);
    }
    .customer__name_heading {
      color: var(--btn-background-color);
      padding: 0rem 3rem;
      font-family: "Poppins";
      font-size: 20px;
      margin-top: 2rem;
    }
    .car__img__all_users {
      width: 10rem;
      height: 6rem;
    }
  `;

  return (
    <AdminAllUsersSection>
      <div className="all_users__container">
        <div className="all_users__content">
          <h1 className="all__user_heading">All Users</h1>
          {Users && Users.length ? (
            Users.map((items, index) => {
              return (
                <div key={items._id} className="allusers_content_crypus">
                  <aside className="all__users__optimus">
                    <div className="all__users__content__prime">
                      <h1>Customer Name</h1>
                      <p>
                        {items.firstname} {items.lastname}
                      </p>
                    </div>
                    <div className="all__users__content__prime">
                      <h1>Customer Email</h1>
                      <p>{items.email}</p>
                    </div>
                    <div className="all__users__content__prime">
                      {Active == index ? (
                        <button
                          className="all__users__content__prime__btn"
                          onClick={() => {
                            setActive(null);
                          }}
                        >
                          Close Orders
                        </button>
                      ) : (
                        <button
                          className="all__users__content__prime__btn"
                          onClick={() => {
                            setActive(index);
                          }}
                        >
                          View Orders
                        </button>
                      )}
                    </div>
                    <div className="all__users__content__prime">
                      <button
                        className="all__users__content__prime__btn"
                        onClick={() => {
                          handleDelete(items._id);
                        }}
                      >
                        Delete User
                      </button>
                    </div>
                  </aside>

                  {Active == index ? (
                    items.orderdetails && items.orderdetails.length ? (
                      items.orderdetails.map((orderItems, index) => {
                        return (
                          <>
                            <div className="all__users__orders_container">
                              {index === 0 ? (
                                <h1 className="customer__name_heading">
                                  {items.firstname} {items.lastname}'s Orders
                                </h1>
                              ) : null}

                              <aside
                                className="all__users__optimus"
                                style={{
                                  padding: "1rem 1.2rem",
                                }}
                              >
                                <div className="all__users__content__prime">
                                  <h1>Car Name</h1>
                                  <p>{orderItems.product.model}</p>
                                </div>

                                <div className="all__users__content__prime">
                                  <h1>PickUp Date</h1>
                                  <p>{orderItems.pickupdate}</p>
                                </div>
                                <div className="all__users__content__prime">
                                  <h1>DropOff Date</h1>
                                  <p>{orderItems.dropoffdate}</p>
                                </div>
                                <div className="all__users__content__prime">
                                  <h1>PickUp Location</h1>
                                  <p>{orderItems.pickuplocation}</p>
                                </div>
                                <div className="all__users__content__prime">
                                  <h1>DropOff Location</h1>
                                  <p>{orderItems.dropofflocation}</p>
                                </div>
                                <div className="all__users__content__prime">
                                  <h1>Price</h1>
                                  <p>₹{orderItems.product.price}</p>
                                </div>
                                <div className="all__users__content__prime">
                                  <img
                                    className="car__img__all_users"
                                    src={orderItems.product.images[0]}
                                    alt="car__img"
                                  />
                                </div>
                              </aside>
                            </div>
                          </>
                        );
                      })
                    ) : (
                      <h1 className="no_orders__found">
                        No Orders has been found
                      </h1>
                    )
                  ) : null}
                </div>
              );
            })
          ) : (
            <h1 className="no_orders__found">No Users Has been found</h1>
          )}
        </div>
      </div>
    </AdminAllUsersSection>
  );
};

export default AdminAllUsers;
