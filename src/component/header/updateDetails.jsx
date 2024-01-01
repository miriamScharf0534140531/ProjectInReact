import { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Appstore from "./class/appstore";
export default function UpdateDetails() {
  const [name, setName] = useState("מרים שרף");
  const [address, setAddress] = useState("רמחל 4");
  const [phone, setPhone] = useState("0534140531");
  const [owner, setOwner] = useState("אתרים בעמ");
  const [logo, setLogo] = useState(";()");
  const [description, setDescription] = useState("עיצוב אתרי ריאקט");
  const handleUpdateDetails = (event) => {
    event.preventDefault();
    fetch("http://localhost:8787/businessData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, address, phone, owner, logo, description }),
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
    Appstore.setIsEditData(false);
  };
  return (
    <>
      <form onSubmit={handleUpdateDetails}>
        <Input
          size="lg"
          color="primary"
          placeholder="name"
          sx={{ margin: "10px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          size="lg"
          color="primary"
          placeholder="address"
          sx={{ margin: "10px" }}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          size="lg"
          color="primary"
          placeholder="phone"
          sx={{ margin: "10px" }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          size="lg"
          color="primary"
          placeholder="owner"
          sx={{ margin: "10px" }}
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <Input
          size="lg"
          color="primary"
          placeholder="logo"
          type="images"
          sx={{ margin: "10px" }}
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
        />
        <Input
          size="lg"
          color="primary"
          placeholder="description"
          sx={{ margin: "10px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" variant="solid">
          submit
        </Button>
      </form>
    </>
  );
}
