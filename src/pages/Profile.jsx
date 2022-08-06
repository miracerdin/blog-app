import Typography from "@mui/material/Typography";
import React from "react";
import Typewriter from "typewriter-effect";
// import MovingComponent from "react-moving-text";
import { Box } from "@mui/system";
import Carousell from "../components/Carousel";
const Profile = () => {
  const Letters = ["mirac erdin hello"];
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

      {/* {Letters.map((letter, index) => (
        <MovingComponent
          type="fadeInFromLeft"
          duration="1000ms"
          delay="index * 100ms"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="forwards"
        >
          {letter}
        </MovingComponent>
      ))} */}
      <Carousell />
    </Box>
  );
};

export default Profile;
