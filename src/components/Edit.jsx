import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { BlogContext } from "../context/BlogContext";

export default function Edit() {
  const {
    editPostOpen,
    setEditPostOpen,
    editBlogPost,
    updateInfo,
    setUpdateInfo,
  } = useContext(BlogContext);

  const handleClose = () => {
    setEditPostOpen(false);
  };

  const handleChange = (e) => {
    setUpdateInfo({
      ...updateInfo,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <Dialog open={editPostOpen} onClose={handleClose}>
        <DialogTitle>Edit Blog Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={updateInfo.title}
            onChange={() => handleChange()}
            required
          />
          <TextField
            autoFocus
            margin="normal"
            id="imageUrl"
            label="ImageUrl"
            type="text"
            fullWidth
            variant="standard"
            value={updateInfo.imageUrl}
            onChange={handleChange}
            placeholder="If you don't type an URL random image will be placed."
          />
          <TextField
            autoFocus
            margin="normal"
            id="content"
            label="Content"
            type="text"
            fullWidth
            variant="standard"
            value={updateInfo.content}
            onChange={handleChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editBlogPost}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
