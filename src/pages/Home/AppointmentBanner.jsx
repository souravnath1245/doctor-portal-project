import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../images/doctor.png";
import appoinmentImage from "../../images/appointment-bg.png";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';

const appoinmentBg = {
  background: `url(${appoinmentImage})`,
  backgroundColor: "rgba(45,58,74, .8)",
  backgrodundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appoinmentBg} sx={{ flexGrow: 1, mt: "50px" }}>
      <Grid container style={{ textAlign: "left" }} spacing={2}>
        <Grid item xs={12} sm={8} md={4}>
          <img
            style={{ width: 400, marginTop: "-120px" }}
            src={doctor}
            alt=""
            srcset=""
          />
        </Grid>

        <Grid
          item
          style={{ color: "white" }}
          xs={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ mb: 2 }} variant="h5">
              Appointment
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }} style={{ color: "" }}>
              Make an Appointment today
            </Typography>
            <Typography variant="p" sx={{ mb: 3 }} style={{ fontSize: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, tenetur. Cumque odit voluptatem consectetur neque.
            </Typography>
            
            <Button variant="contained">Learn More</Button>
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
