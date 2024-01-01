import { useState } from 'react';
import './App.css';
import BusinessData from "./component/header/businessData";
import Meeting from './component/meeting';
import AddService from './component/addService';
import ShowServices from './component/showServices';
import AddMeeting from './component/addMeeting';
import ShowMeeting from './component/showMeeting'
import BusinessUser from './component/BusinessUser';
import BusinessAdmin from './component/BusinnesAdmin';
import { Link } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BusinessData></BusinessData> */}
    {/* <Meeting serviceName="nn" dateTime="bgbg" clientName="bgb" clientPhone="mm" clientEmail="hh" ></Meeting> */}
   {/* <AddService></AddService> */}
   {/* <ShowServices/> */}
   {/* <AddMeeting/> */}
   {/* <ShowMeeting/> */}
   {/* <ShowServices/> */}
   
   <BusinessUser/>
   {/* <Link to="./component/BusinessAdmin"> bb</Link> */}

   {/* <BusinessAdmin /> */}

    </>
  )
}

export default App
