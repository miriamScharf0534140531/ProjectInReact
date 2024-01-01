import { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Appstore from "./header/class/appstore";
// import Appstore from "./class/appstore";
export default function AddService(){
  const [id, setId] = useState("1");
  const [name, setName] = useState("מרים");
  const [description, setDescription] = useState("מדמדמ");
  const [price, setPrice] = useState("50 שח");
  const [duration, setDuration] = useState("שעתיים");
  const handleAddService = (event) => {
    event.preventDefault();
    fetch("http://localhost:8787/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id,name,description,price,duration}),
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
      Appstore.setIsAddService(false);

  };
  return (
    <div className="fix background">
      <form onSubmit={handleAddService}>
        <Input
          size="lg"
          color="primary"
          placeholder="id"
          sx={{ margin: "10px" }}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
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
          placeholder="description"
          sx={{ margin: "10px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          size="lg"
          color="primary"
          placeholder="price"
          sx={{ margin: "10px" }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          size="lg"
          color="primary"
          placeholder="duration"
          sx={{ margin: "10px" }}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <Button type="submit" variant="solid">
          submit
        </Button>
      </form>
    </div>
  );
}
