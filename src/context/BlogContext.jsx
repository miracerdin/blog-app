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
  console.log(posts);
  console.log(currentUser);
  //Bilgi ekleme
  const writeToDatabase = () => {
    if (title && content) {
      const postListRef = ref(db, "posts");
      console.log(postListRef);
      const newPostListRef = push(postListRef);
      // console.log(newBlogRef);
      set(newPostListRef, {
        title: title,
        content: content,
        imageUrl: imageUrl,
        author: currentUser.displayName,
        userId: currentUser.uid,
        // favourite: "0",
        // likes: [""],
      });
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
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
