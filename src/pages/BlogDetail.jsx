import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const defaultImage = "https://picsum.photos/250/194";

const BlogDetail = () => {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();
  const [showMore, setShowMore] = React.useState(false);
  return (
    <Card sx={{ width: "250px", m: "1rem" }}>
      <CardMedia
        component="img"
        height="194"
        image={state.post.imageUrl ? state.post.imageUrl : defaultImage}
        alt="Paella dish"
      />
      <CardHeader title={state.post.title} subheader="September 14, 2016" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {!showMore ? state.post.content.slice(0, 150) : state.post.content}
          <Box
            component="span"
            onClick={() => setShowMore(!showMore)}
            sx={{ cursor: "pointer", color: "black" }}
          >
            {state.post.content.length <= 150
              ? ""
              : !showMore
              ? "...read more"
              : " show less"}
          </Box>
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ bgcolor: "black" }} aria-label="recipe"></Avatar>
        <Typography variant="body1" color="text.secondary" sx={{ ml: "1rem" }}>
          {state.post.author}
        </Typography>
      </Box>

      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            sx={{ color: state.post.favourite !== 0 ? "red" : "dark" }}
          />
          <Box variant="body2">{state.post.favourite}</Box>
        </IconButton>
        <Button
          variant="contained"
          onClick={() => navigate(-1)}
          // !currentUser && toastWarnNotify("Please log in to see the detail");
        >
          Back
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogDetail;
