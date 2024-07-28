import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useAllUserContext } from "./AllUserProvider";
const AdminAllOrders = () => {
  const { Orders } = useAllUserContext();
  const AdminAllOrdersSection = styled.section`
    /* border: 2px solid; */
    width: 100%;
    .all__order__container {
      padding: 2rem 4rem;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    .recent__orders_hero {
      /* border: 2px solid; */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 5rem;
      width: 100%;
      border-radius: 5px;
      padding: 1rem 2rem;
      box-shadow: rgba(23, 23, 23, 0.24) 0px 1px 3px;
      overflow: hidden;
      background-color: var(--page-background-color);
    }
    .recent__orders_hero_crypus {
      display: flex;
      flex-direction: column;
      font-style: Poppins;
      gap: 5px;
      width: 10rem;
      align-items: center;
      justify-content: center;
    }
    .recent__orders_hero_crypus h1 {
      font-size: 16px;
      color: var(--black-color);
      font-family: "Poppins";
    }
    .recent__orders_hero_crypus p {
      font-size: 15px;
      color: var(--text-color);
      font-family: Rubik;
      text-align: center;
    }
    .car__img__orders {
      width: 10rem;
      height: 6rem;
    }
    .all__order__container__heading {
      font-size: 1.8rem;
      font-family: Poppins;
      color: var(--btn-background-color);
    }
  `;
 
  return (
    <>
      <GlobalStyle />
      <AdminAllOrdersSection>
        <div className="all__order__container">
          <h1 className="all__order__container__heading">All Orders</h1>
          {Orders.length ? (
            Orders.reverse().map((items, Index) => {
              return (
                <>
                  <aside key={items.id} className="recent__orders_hero">
                    <div className="recent__orders_hero_crypus">
                      <h1>Car Model</h1>
                      <p>{items.product.model}</p>
                    </div>
                    <div className="recent__orders_hero_crypus">
                      <h1>Customer Name </h1>
                      <p>
                        {items.firstname} {items.lastname}
                      </p>
                    </div>
                    <div className="recent__orders_hero_crypus">
                      <h1>Price</h1>
                      <p>₹ {items.product.price}</p>
                    </div>
                    <div className="recent__orders_hero_crypus">
                      <h1>PickUp Date</h1>
                      <p>{items.pickupdate.split("-").reverse().join("/")}</p>
                    </div>
                    <div className="recent__orders_hero_crypus">
                      <h1>DropOff Date</h1>
                      <p>{items.dropoffdate.split("-").reverse().join("/")}</p>
                    </div>
                    <div className="recent__orders_hero_crypus">
                      <img
                        className="car__img__orders"
                        src={items.product.images[0]}
                        alt="car__img"
                      />
                    </div>
                  </aside>
                </>
              );
            })
          ) : (
            <h1>No Order had been done</h1>
          )}
        </div>
      </AdminAllOrdersSection>
    </>
  );
};

export default AdminAllOrders;
