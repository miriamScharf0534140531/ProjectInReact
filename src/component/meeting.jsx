import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
// import { useState, useEffect } from "react";
export default function Meeting(props) {
  const { serviceName, dateTime, clientName, clientPhone, clientEmail } = props;
  const today = new Date();
  const endOfWeek = new Date();
  endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
  const isToday = () => {
    const meetingDate = new Date(dateTime);
    return (
      meetingDate.getDate() === today.getDate() &&
      meetingDate.getMonth() === today.getMonth() &&
      meetingDate.getFullYear() === today.getFullYear()
    );
  };
  const isInNextWeek = () => {
    const meetingDate = new Date(dateTime);
    return meetingDate <= endOfWeek;
  };
  const shouldDisplay = () => {
    const meetingDate = new Date(dateTime);
    return meetingDate >= today;
  };
  const getColorByDate = () => {
    if (isToday()) {
      return "red";
    } else if (isInNextWeek()) {
      return "#9c27b0";
    } else {
      return "rgb(137 136 136)";
    }
  };

  return (
    <>
      {shouldDisplay() && (
        <Card sx={{ maxWidth: 345, margin: "10px", borderColor: getColorByDate(), borderWidth: "2px", borderStyle: "solid" }}>
          <CardMedia
            component="img"
            alt="logo"
            height="140"
            image='https://doctorlam.co.il/wp-content/uploads/2020/11/%D7%94%D7%9E%D7%A8%D7%9B%D7%96_%D7%9C%D7%A8%D7%A4%D7%95%D7%90%D7%AA_%D7%A9%D7%99%D7%A0%D7%99%D7%99%D7%9D_%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D_%D7%95%D7%A0%D7%95%D7%A2%D7%A8-removebg-preview.png'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={getColorByDate()}>
              meeting
            </Typography>
            <Typography variant="body2" color="text.secondary">
              serviceName: {serviceName}<br />
              dateTime: {new Date(dateTime).toLocaleDateString("en-GB")}<br />
              clientName: {clientName}<br />
              clientPhone: {clientPhone}<br />
              clientEmail: {clientEmail}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
// import { useState, useEffect } from "react";

// export default function Meeting(props) {
//   const { serviceName, dateTime, clientName, clientPhone, clientEmail } = props;
//   const today = new Date();
//   const endOfWeek = new Date();
//   endOfWeek.setDate(today.getDate() + (6 - today.getDay()));

//   // הפונקציה בודקת האם התאריך של הפגישה הוא היום הנוכחי
//   function isToday(){
//     const meetingDate = new Date(dateTime);
//     // השוואה בין התאריך של הפגישה לתאריך המקומי של היום הנוכחי
//     const localToday = new Date(today.toLocaleDateString("en-GB"));  
//     return meetingDate.getTime() === localToday.getTime();
//   };

//   const isInNextWeek = () => {
//     const meetingDate = new Date(dateTime);
//     return meetingDate <= endOfWeek;
//   };

//   const shouldDisplay = () => {
//     const meetingDate = new Date(dateTime);
//     return meetingDate >= today;
//   };

//   const getColorByDate = () => {
//     if (isToday()) {
//       return "red"; // אם התאריך הוא היום, צבע אדום
//     } else if (isInNextWeek()) {
//       return "orange"; // אם התאריך הוא בסוף השבוע או לפניו, צבע כתום
//     } else {
//       return "blue"; // אם התאריך הוא במהלך השבוע, צבע כחול
//     }
//   };

//   return (
//     <>
//       {shouldDisplay() && (
//         <Card sx={{ maxWidth: 345, margin: "10px", borderColor: getColorByDate(), borderWidth: "2px", borderStyle: "solid" }}>
//           <CardMedia
//             component="img"
//             alt="logo"
//             height="140"
//             image='https://doctorlam.co.il/wp-content/uploads/2020/11/%D7%94%D7%9E%D7%A8%D7%9B%D7%96_%D7%9C%D7%A8%D7%A4%D7%95%D7%90%D7%AA_%D7%A9%D7%99%D7%A0%D7%99%D7%99%D7%9D_%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D_%D7%95%D7%A0%D7%95%D7%A2%D7%A8-removebg-preview.png'
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div" color={getColorByDate()}>
//               meeting
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               serviceName: {serviceName}<br />
              
//               {/* הוספת הסבר לתאריך המוצג */}
//               dateTime: {new Date(dateTime).toLocaleDateString("en-GB")}<br />

//               clientName: {clientName}<br />
//               clientPhone: {clientPhone}<br />
//               clientEmail: {clientEmail}
//             </Typography>
//           </CardContent>
//         </Card>
//       )}
//     </>
//   );
// }




// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
// export default function Meeting(props){
//     const { serviceName,
//           dateTime,
//           clientName,
//           clientPhone,
//           clientEmail} = props;
//           return(
//             <>
//     <Card sx={{ maxWidth: 345 ,margin:"10px"}}>
//     <CardMedia
//         component="img"
//         alt="logo"
//         height="140"
//         image='https://doctorlam.co.il/wp-content/uploads/2020/11/%D7%94%D7%9E%D7%A8%D7%9B%D7%96_%D7%9C%D7%A8%D7%A4%D7%95%D7%90%D7%AA_%D7%A9%D7%99%D7%A0%D7%99%D7%99%D7%9D_%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D_%D7%95%D7%A0%D7%95%D7%A2%D7%A8-removebg-preview.png'
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           meeting
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//         serviceName: {serviceName}<br/>
//         dateTime:{dateTime}<br/>
//         clientName:{clientName}<br/>
//         clientPhone: {clientPhone}<br/>
//         clientEmail:{clientEmail}
//         </Typography>
//       </CardContent>    
//       </Card>
//             </>
//           )

// }