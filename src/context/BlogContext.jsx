import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
// import { userObserver } from "../auth/firebase";
import { set, ref, push, onValue, remove, update } from "firebase/database";
import { AuthContext } from "./AuthContext";
import { db } from "../auth/firebase";
import toast from "react-hot-toast";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [posts, setPosts] = useState([]);
  const [editPostOpen, setEditPostOpen] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({});

  //Bilgi ekleme
  const writeToDatabase = () => {
    if (title && content) {
      const postListRef = ref(db, "posts");
      // console.log(postListRef);
      const newPostListRef = push(postListRef);
      // console.log(newBlogRef);
      set(newPostListRef, {
        title: title,
        content: content,
        imageUrl: imageUrl,
        author: currentUser.email,
        userId: currentUser.uid,
        favourite: 0,

        likes: [""],
      });
      toast.success("Succesfully added");
      // console.log(db);
      setTitle("");
      setContent("");
      setImageUrl("");
      //   setNewPostOpen(false);
    } else {
      toast.error("Title and Content is required");
    }
  };

  useEffect(() => {
    const starCountRef = ref(db, "posts");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const postsArr = [];
      for (let id in data) {
        postsArr.push({ id, ...data[id] });
      }
      setPosts(postsArr);
    });
  }, []);

  const editBlogPost = () => {
    if (updateInfo.title && updateInfo.content) {
      update(ref(db, "posts/" + updateInfo.id), {
        title: updateInfo.title,
        content: updateInfo.content,
        imageUrl: updateInfo.imageUrl,
        favourite: updateInfo.favourite,
        likes: updateInfo.likes,
        author: currentUser.email,
        userId: currentUser.uid,
      });
      setEditPostOpen(false);
    } else {
      toast.error("Title and Content is required");
    }
  };

  const increaseFav = (post) => {
    if (currentUser) {
      if (!Object.values(post.likes).includes(currentUser.uid)) {
        update(ref(db, "posts/" + post.id), {
          ...post,
          favourite: +post.favourite + 1,
          likes: [...post.likes, currentUser.uid],
        });
      } else {
        toast.error("You can only like a single post once!!!");
      }
    } else {
      toast.error("You should login first");
    }
  };
  const handleDelete = (id) => {
    remove(ref(db, "posts/" + id));
  };

  return (
    <BlogContext.Provider
      value={{
        title,
        content,
        imageUrl,
        setImageUrl,
        setTitle,
        setContent,
        writeToDatabase,
        posts,
        handleDelete,
        editPostOpen,
        setEditPostOpen,
        editBlogPost,
        updateInfo,
        setUpdateInfo,
        increaseFav,
        // setFavoriteNumber,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
