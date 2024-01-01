
import { useState, useEffect } from "react";
import Meeting from "./meeting";
export default function ShowMeeting() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8787/appointments")
      .then((response) => response.json())
      .then((result) => {
        result.forEach((meeting) => {
          meeting.dateTime = new Date(meeting.dateTime);
        });
        result.sort((a, b) => a.dateTime - b.dateTime);
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex">
      {data.map((meeting) => (
        <Meeting
          serviceName={meeting?.serviceName}
          dateTime={meeting?.dateTime.toISOString()}
          clientName={meeting?.clientName}
          clientPhone={meeting?.clientPhone}
          clientEmail={meeting?.clientEmail}
        />
      ))}
    </div>
  );
}

// import { useState,useEffect } from "react";
// import Meeting from "./meeting";
// export default function ShowMeeting(){ 
//     const [data, setData] = useState([]);
//     useEffect(() => {
//       fetch("http://localhost:8787/appointments")
//         .then((response) => {
//           // if (!response.ok) {
//           //   throw new Error("Network response was not ok");
//           // }
//           return response.json();
//         })
//         .then((result) => {
//           setData(result);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         });
//     }, []);
//     return(
//         <div className="flex">
//             {data.map(meeting=><Meeting
//             serviceName={meeting?.serviceName} 
//             dateTime={meeting?.dateTime} 
//             clientName={meeting?.clientName} 
//             clientPhone={meeting?.clientPhone} 
//             clientEmail={meeting?.clientEmail}/>)}
//         </div>
//     )
// }