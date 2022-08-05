import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { BlogContext } from "../context/BlogContext";
import Edit from "./Edit";

const defaultImage = "https://picsum.photos/250/194";

export default function BlogCards({ post }) {
  const { title, content, imageUrl, id, favourite, likes, author } = post;
  const { currentUser } = React.useContext(AuthContext);
  const [showMore, setShowMore] = React.useState(false);
  const {
    handleDelete,
    setUpdateInfo,
    updateInfo,
    editBlogPost,
    setEditPostOpen,
    increaseFav,
  } = React.useContext(BlogContext);
  const navigate = useNavigate();

  const handleDetails = () => {
    console.log(id);
    if (currentUser) {
      navigate(`/blogcard/${id}`, {
        state: { post },
      });
    } else {
      toast.error("You Should Login to See Details");
    }
  };
  const handleEdit = () => {
    setUpdateInfo({
      author: author,
      title: title,
      imageUrl: imageUrl,
      id: id,
      content: content,
      favourite: favourite,
      likes: likes,
    });
    setEditPostOpen(true);
  };
  return (
    <div>
      <Card
        sx={{
          width: "300px",
          m: "1rem",
          height: "500px",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={imageUrl ? imageUrl : defaultImage}
          alt="Paella dish"
        />
        <CardHeader title={title} subheader="September 14, 2016" />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            height="90px"
            sx={{
              wordBreak: "break-word",
              // textOverflow: "ellipsis",
              // display: "-webkit-box",
              // WebkitLineClamp: "2",
              // WebkitBoxOrient: "vertical",
              maxHeight: 200,
              overflow: "auto",
            }}
          >
            {!showMore ? content.slice(0, 100) : content}
            <Box
              component="span"
              onClick={() => setShowMore(!showMore)}
              sx={{ cursor: "pointer", color: "black" }}
            >
              {content.length <= 150
                ? ""
                : !showMore
                ? "...read more"
                : " show less"}
            </Box>
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginX: "1rem",
          }}
        >
          <Avatar sx={{ bgcolor: "black" }} aria-label="recipe"></Avatar>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ ml: "1rem" }}
          >
            {author}
          </Typography>
        </Box>

        <CardActions
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              onClick={() => increaseFav(post)}
              sx={{ color: favourite !== 0 ? "red" : "dark" }}
            />
            <Box variant="body2">{favourite}</Box>
          </IconButton>
          {currentUser.uid === post.userId ? (
            <>
              <Button variant="contained" onClick={handleEdit}>
                Edit
              </Button>
              <Button
                variant="contained"
                sx={{ bgcolor: "red" }}
                onClick={() => handleDelete(id)}
              >
                Delete
              </Button>
              <Button variant="contained" onClick={handleDetails}>
                Detail
              </Button>
            </>
          ) : (
            <Button variant="contained" onClick={handleDetails}>
              Detail
            </Button>
          )}
        </CardActions>
      </Card>
      <Edit />
    </div>
  );
}
