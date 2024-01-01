
import { observer } from "mobx-react";
import Details from "./header/details";
import Appstore from "./header/class/appstore";
import UpdateDetails from "./header/updateDetails";
import AlertInvertedColors from "./header/alertInvertedColors";
import Login from "./header/login";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Stack from "@mui/joy/Stack";
import AddService from "./addService";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
const BusinessAdmin = observer(() => {
  return (
    <>
      {Appstore.getIsLogin ? (
        Appstore.getIsEditData ? (
          <UpdateDetails />
        ) : (
          <Details />
        )
      ) : Appstore.getIsErrorLogin ? (
        <AlertInvertedColors />
      ) : (
        <Login />
        
        )}
      {Appstore.getIsLogin && 
      <Stack spacing={2}  >
          <ButtonGroup variant="soft" aria-label="soft button group"  sx={{justifyContent: "center"}} disabled={Appstore.getIsAddService} >
            <Link to="./services" >
            <Button disabled={Appstore.getIsAddService}
            >
              services
            </Button>
            </Link>
            <Link to="./meeting" >
            <Button disabled={Appstore.getIsAddService}
            >
              meeting
            </Button>
            </Link>
          </ButtonGroup>
          <Outlet/>
        </Stack>
        
        } 
      {Appstore.getIsAddService&&<AddService />}
    </>
  );
});
export default BusinessAdmin;
