import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AllUserContext = createContext(undefined);

export const useAllUserContext = () => {
  return useContext(AllUserContext);
};

const AllUserProvider = ({ children }) => {
  const [Users, SetUsers] = useState([]);
  const [Orders, SetOrders] = useState([]);
  const GetAllUsers = () => {
    const doc = axios.get("https://car-rental-backend-1tpp.onrender.com/user");
    doc
      .then((response) => {
        SetUsers(response.data.doc);

        SetOrders(
          response.data.doc
            .map((items) => {
              return items.orderdetails.length ? items.orderdetails : null;
            })
            .filter((items) => {
              return items != null;
            })
            .flatMap((items) => {
              return items;
            })
        );
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  useEffect(() => {
    GetAllUsers();
  }, []);
  return (
    <AllUserContext.Provider value={{ Users, Orders }}>
      {children}
    </AllUserContext.Provider>
  );
};

export default AllUserProvider;
