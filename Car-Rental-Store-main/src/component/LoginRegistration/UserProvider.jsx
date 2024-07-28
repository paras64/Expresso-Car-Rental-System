import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const UserDataContext = createContext();
export const useUserDataContext = () => {
  return useContext(UserDataContext);
};
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    orderdetails: [],
    password: "",
    token: "",
  });
  const updateUserData = (newData) => {
    setUserData((prevData) => {
      return { ...prevData, ...newData };
    });
  };
  const GetUserData = () => {
    if (!sessionStorage.getItem("UserDetails")) {
      return;
    }
    const token = JSON.parse(sessionStorage.getItem("UserDetails")).token;
    const queryCall = `https://car-rental-backend-1tpp.onrender.com/user/getuser/${token}`;
    const doc = axios.get(queryCall);
    doc
      .then((response) => {
        updateUserData(response.data.doc);
      })
      .catch((err) => {
        alert(err.response.data.message + " access");
      });
  };
  useEffect(() => {
    GetUserData();
  }, []);
  return (
    <UserDataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserProvider;
