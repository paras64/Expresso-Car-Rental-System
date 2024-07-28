import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AdminDataContext = createContext();

export const useAdminDataContext = () => {
  return useContext(AdminDataContext);
};

const AdminProvider = ({ children }) => {
  const [adminData, setAdminData] = useState({
    firstname: "",
    token: "",
  });

  const updateAdminData = (newData) => {
    setAdminData((prevData) => {
      return {
        ...prevData,
        ...newData,
      };
    });
  };
  const GetAdminData = () => {
    if (!JSON.parse(sessionStorage.getItem("AdminData"))) {
      return;
    }
    const token = JSON.parse(sessionStorage.getItem("AdminData")).token;
    const doc = axios.get(`https://car-rental-backend-1tpp.onrender.com/admin/getdata/${token}`);
    doc
      .then((response) => {
        updateAdminData({
          firstname: JSON.parse(sessionStorage.getItem("AdminData")).firstname,
          token: response.data.token,
        });
      })
      .catch((err) => {
        alert(err.response.data.message + " access");
      });
  };
  useEffect(() => {
    GetAdminData();
  }, []);
  return (
    <>
      <AdminDataContext.Provider value={{ adminData, updateAdminData }}>
        {children}
      </AdminDataContext.Provider>
    </>
  );
};

export default AdminProvider;
