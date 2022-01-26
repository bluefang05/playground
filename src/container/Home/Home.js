import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./home.css";
function Home() {
  return (
    <div>
      <h3>Thankyou for letting me prepare a quick sample</h3>
      <h4>This is what I used:</h4>
      <div className="class-home">
      <CardActionArea>
          <Typography variant="h5">html5 & css3</Typography>
  <CardMedia
    component="img"
    image="https://miro.medium.com/max/1400/0*pxb9-4jdzxSp1K5Y.png"
    alt="CardMedia Image Example"
    height="280"
    title="CardMedia Image Example"
  />
</CardActionArea>
<CardActionArea>
<Typography variant="h5">React JS</Typography>
  <CardMedia
    component="img"
    image="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"
    alt="CardMedia Image Example"
    height="280"
    title="CardMedia Image Example"
  />
</CardActionArea>
<CardActionArea>
<Typography variant="h5">MAterial UI</Typography>
  <CardMedia
    component="img"
    image="https://v4.mui.com/static/logo_raw.svg"
    alt="CardMedia Image Example"
    width="280"
    title="CardMedia Image Example"
  />
</CardActionArea>
        

      </div>
    </div>
  );
}

export default Home;
