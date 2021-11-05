import * as React from "react";
// import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "./Service";
import fluoried from "../../images/fluoride.png"
import whitening from "../../images/whitening.png"
import cavity from "../../images/cavity.png"
import Typography from "@mui/material/Typography";

const services = [
  {
    title: "Fluoride Treatment",
    description:
      "Est sit nonumy accusam aliquyam nonumy ea sadipscing labore. Kasd dolores gubergren eos no vero sea et sea. Dolores sanctus.",
    img: fluoried,
    },
  {
    title: "Cavity Filling",
    description:
      "Est sit nonumy accusam aliquyam nonumy ea sadipscing labore. Kasd dolores gubergren eos no vero sea et sea. Dolores sanctus.",
    img: cavity
    },
  {
    title: "Teeth whitening",
    description:
      "Est sit nonumy accusam aliquyam nonumy ea sadipscing labore. Kasd dolores gubergren eos no vero sea et sea. Dolores sanctus.",
    img : whitening
    },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{fontWeight: 400, color:" text.secondary", textAlign:"center"}} gutterBottom variant="h5" component="div">
            Our Sevice
          </Typography>
      <Typography  sx={{fontWeight: 800,my: 2, color: "success.main",textAlign:"center"}} gutterBottom variant="h5" component="div">
            Service We Provided
          </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map(( service , index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              
              <Service style={{margin: "0 auto" }} service={service} />
              
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
