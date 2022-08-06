import Typography from "@mui/material/Typography";
import React from "react";
import Typewriter from "typewriter-effect";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import Carousell from "../components/Carousel";
const Profile = () => {
  const theme = createTheme();

  theme.typography.h2 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };
  return (
    <Box
      sx={{
        bgcolor: "bisque",
        height: "100vh",
        p: "3rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h2" gutterBottom sx={{ color: "black" }}>
          <Typewriter
            // options={{
            //   strings: ["Hello"],
            //   autoStart: true,
            //   loop: false,
            // }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello")
                .pauseFor(1000)
                .deleteAll()
                .typeString("My name is Miraç")
                .start();
            }}
          />
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ color: "black" }}>
          <Typewriter
            // options={{
            //   delay: "250",
            //   autoStart: true,
            //   loop: false,
            // }}
            onInit={(typewriter) => {
              typewriter.typeString("I am a Frontend Developer ").start();
            }}
          />
        </Typography>
      </ThemeProvider>
      <Carousell />
    </Box>
  );
};

export default Profile;
