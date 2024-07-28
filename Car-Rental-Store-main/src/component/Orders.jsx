import React from "react";
import Navbar from "./Navbar";
import { GlobalStyle } from "./styles/GlobalStyle";
import AboutHome from "./AboutSectionComponents/AboutHome";
import OrdersSummary from "./OrdersComponent/OrdersSummary";
const Orders = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AboutHome
        headingText={"CLICK, ORDER, "}
        spanText={"CRUISE."}
        Subheading={"Seamless Ordering, Limitless Possibilities."}
        img={
          "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=600"
        }
      />
      <OrdersSummary />
    </>
  );
};

export default Orders;
