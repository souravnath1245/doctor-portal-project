import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";

const Service = (props) => {
  const { title, description ,img} = props.service;
  return (
    <Card sx={{ maxWidth: 345 ,border: 0 ,boxShadow: 0}}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          style={{width: "auto", height: "80px", margin: " 0 auto"}}
            image={img}
          alt="green iguana"
        />
        <CardContent style={{textAlign : "center"}}>
          <Typography  gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
};

export default Service;
