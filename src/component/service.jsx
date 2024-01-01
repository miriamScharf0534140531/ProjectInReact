import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
export default function Service(props) {
  const { name, description } = props;
  return (
    <>
      <Card sx={{ maxWidth: 345 ,margin:"10px"}}>
        <CardMedia
          component="img"
          alt="logo"
          height="140"
          image="https://doctorlam.co.il/wp-content/uploads/2020/11/%D7%94%D7%9E%D7%A8%D7%9B%D7%96_%D7%9C%D7%A8%D7%A4%D7%95%D7%90%D7%AA_%D7%A9%D7%99%D7%A0%D7%99%D7%99%D7%9D_%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D_%D7%95%D7%A0%D7%95%D7%A2%D7%A8-removebg-preview.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            service
          </Typography>
          <Typography variant="body2" color="text.secondary">
            name: {name}
            <br />
            description:{description}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
