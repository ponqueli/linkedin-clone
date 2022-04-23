import React, { useEffect, useState } from "react";
import styles from "./Feed.module.css";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import ViewDayRoundedIcon from "@mui/icons-material/ViewDayRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import InputOptions from "./InputOptions";
import Post from "./Post";
import { db } from "./firebase.js";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
const Feed = () => {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className={styles.feed}>
      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <EditRoundedIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className={styles.options}>
          <InputOptions
            Icon={AddPhotoAlternateRoundedIcon}
            title="Photo"
            color="#70B5F9"
          />
          <InputOptions
            Icon={SubscriptionsRoundedIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions
            Icon={EventNoteRoundedIcon}
            title="Event"
            color="#C0CBCD"
          />
          <InputOptions
            Icon={ViewDayRoundedIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
