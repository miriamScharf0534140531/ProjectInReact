import { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
// import { BrowserRouter as Router, Route, Link, useHistory, BrowserRouter, Routes } from 'react-router-dom';
import UpdateDetails from "./updateDetails";
import Appstore from "./class/appstore";
export default function Details() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8787/businessData")
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        return response.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // <BrowserRouter>
  // <Routes>
  //     <Route path={"updateDetails"} element={<UpdateDetails/>} ></Route>
  // </Routes>
  // </BrowserRouter>
  return (
    <>
      <div className="background">
        <div>name: {data?.name}</div>
        <div>address: {data?.address}</div>
        <div>owner: {data?.owner}</div>
        <div>logo: {data?.logo}</div>
        <div>description: {data?.description}</div>
        {Appstore.getIsLogin && (
          <Button 
            type="submit"
            onClick={() => Appstore.setIsEditData(true)}
            variant="solid"
          >
            update
          </Button >
        )}
      </div>
    </>
  );
}
