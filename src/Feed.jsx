import React from "react";
import styles from "./Feed.module.css";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import ViewDayRoundedIcon from "@mui/icons-material/ViewDayRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import InputOptions from "./InputOptions";
import Post from "./Post";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <EditRoundedIcon />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit">Send</button>
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

      <div className="postContainer">
        <Post/>
      </div>
    </div>
  );
};

export default Feed;
