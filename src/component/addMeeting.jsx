import { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Appstore from "./header/class/appstore";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
export default function AddMeeting() {
  const [serviceName] = useState("מרים");
  const [dateTime, setDateTime] = useState(dayjs("2022-04-17T15:30"));
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8787/services")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleAddMeeting = (event) => {
    event.preventDefault();
    fetch("http://localhost:8787/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        serviceName,
        clientName,
        clientPhone,
        clientEmail,
        dateTime,
      }),
    })
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        return response;
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    Appstore.setIsAddMeetimg(false);
  };
  return (
    <div className="fix background">
      <form onSubmit={handleAddMeeting}>
        <Select color="primary" sx={{ margin: "10px" }} placeholder="services">
          {data.map((option) => (
            <Option value={option.name}>{option.name}</Option>
          ))}
        </Select>
        <Input
          size="lg"
          color="primary"
          placeholder="clientName"
          sx={{ margin: "10px" }}
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <Input
          size="lg"
          color="primary"
          placeholder="clientPhone"
          sx={{ margin: "10px" }}
          value={clientPhone}
          onChange={(e) => setClientPhone(e.target.value)}
        />
        <Input
          size="lg"
          color="primary"
          type="email"
          placeholder="clientEmail"
          sx={{ margin: "10px" }}
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            color="primary"
            value={dateTime}
            onChange={(e) => setDateTime(e)}
          />
        </LocalizationProvider>
        <div></div>
        <Button sx={{ margin: "10px" }} type="submit" variant="solid">
          submit
        </Button>
      </form>
    </div>
  );
}
