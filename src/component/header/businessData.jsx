 import {observer}from "mobx-react";
//  import { useState } from "react";
import Details from "./details";
import Login from "./login";
import AppStore from "./class/appstore";
import UpdateDetails from "./updateDetails";
import AlertInvertedColors from "./alertInvertedColors";
const BusinessData = (observer(() => {
    // const [editForm, setEditForm] = useState(false)
    return (
        <>
           { AppStore.getIsLogin?AppStore.getIsEditData?<UpdateDetails/>:<Details/>:
           AppStore.getIsErrorLogin?<AlertInvertedColors/>:<Login/>}
        </>

    )
}))
export default BusinessData