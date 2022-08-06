import Typography from "@mui/material/Typography";
import React from "react";
import Typewriter from "typewriter-effect";
// import MovingComponent from "react-moving-text";
import { Box } from "@mui/system";
const Profile = () => {
  const Letters = ["mirac erdin hello"];
  return (
    <Box
      sx={{
        bgcolor: "#c8ccc0",
        height: "100vh",
        p: "3rem",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItem: "flex",
        // backgroundImage: 'url("https://picsum.photos/1366/768")',
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
    </Box>
  );
};

export default Profile;
