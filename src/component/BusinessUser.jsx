import {observer}from "mobx-react";
import Details from "./header/details";
import ShowServices from "./showServices";
import Appstore from "./header/class/appstore";
import AddMeeting from './addMeeting';
import { Link } from "react-router-dom";
//  import { useState } from "react";
const BusinessUser = (observer(() => {
    // const [editForm, setEditForm] = useState(false)
    return (
        <>
            <Details/>
            <ShowServices/>
            {Appstore.getIsAddMeetimg&&<AddMeeting/>}
        </>
    )
}))
export default BusinessUser