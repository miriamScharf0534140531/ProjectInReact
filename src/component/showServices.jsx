import { useState, useEffect } from "react";
import Service from "./service";
import Appstore from "./header/class/appstore";
import Button from "@mui/joy/Button";
export default function ShowServices() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8787/services")
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
  return (
    <div >
      <div className="flex">
      {data.map((service) => {
        return (
          <Service name={service?.name} description={service?.description} />
        );
      })}
      </div>
      {Appstore.getIsLogin? <Button variant="solid" onClick={()=>Appstore.setIsAddService(true)}> add service </Button>
      :<Button  variant="solid" onClick={()=>Appstore.setIsAddMeetimg(true)}> add meeting </Button>}
    </div>
  );
}
