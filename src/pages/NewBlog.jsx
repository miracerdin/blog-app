import React from "react";
import { Grid, TextField, Button, Stack, Box } from "@mui/material";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const NewBlog = () => {
  const {
    title,
    content,
    imageUrl,
    setTitle,
    setContent,
    setImageUrl,
    writeToDatabase,
  } = useContext(BlogContext);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid
        textAlign="center"
        verticalAlign="middle"
        direction="column"
        sx={{ width: "300px" }}
      >
        <h2 className="contact-header">Add New Post</h2>
        <Box
          style={{ backgroundColor: "white", padding: "20px" }}
          autoComplete="off"
        >
          <form>
            <Stack spacing={3} direction="column">
              <TextField
                fullWidth
                id="title"
                label="Title"
                variant="outlined"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
              />

              <div>
                <TextField
                  fullWidth
                  id="image_url"
                  label="Image url"
                  variant="outlined"
                  name="Image url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Image url"
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  id="content"
                  label="Content"
                  variant="outlined"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Content"
                />
              </div>
              <Button variant="contained" onClick={writeToDatabase}>
                Create
              </Button>
            </Stack>
          </form>
        </Box>
      </Grid>
    </div>
  );
};

export default NewBlog;
