import * as React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import bg from "../../images/bg.png";
import chair from "../../images/chair.png";


const Banner = () => {
  const bannerBg = {
    background: `url(${bg})`,
    backgroundColor: "#00000085",
    backgroundPosition: "center",
    marginTop:15
  };
  const vartical = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
    
  };
  return (
    
      <Box style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid style={vartical} item xs={12} lg={6}>
            <Box style={{width: 400, color: "white"}}>
              <Typography sx={{ mb: 2 }} variant="h5">
                Appointment
              </Typography>
              <Typography  variant="h3">
                Appointment
              </Typography>
              <Typography sx={{ my: 5 }} variant="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos laboriosam nam id placeat esse, quasi nulla eius
                officiis eos eum.
                <br />
              </Typography>
              <Button variant="contained">Contained</Button>
            </Box>
          </Grid>
          <Grid style={vartical} item xs={12} lg={6}>
            <img
              style={{ width: 350 }}
              src={chair}
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    
  );
};

export default Banner;
