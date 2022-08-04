import React from "react";
import BlogCards from "../components/BlogCards";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import Box from "@mui/material/Box";
const Main = () => {
  const { posts } = useContext(BlogContext);
  console.log(posts);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {posts?.map((post) => (
        <BlogCards key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default Main;
