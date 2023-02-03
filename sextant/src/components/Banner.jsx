import React from "react";
import { AppBar, Button, Container, Typography } from "@mui/material";
export const Banner = () => {
  return (
    <>
    <AppBar sx={{bgcolor:"white"}}>
      <Container>
        <Typography sx={{ color: "#009EDC" }} variant="h3">
          Sextant
        </Typography>
      </Container>
    </AppBar>
    </>
  );
};
