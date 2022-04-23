import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOptions from "./InputOptions";
import styles from "./Post.module.css";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className={styles.post}>
      <div className={styles.header}>
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
        <div className={styles.info}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.body}>
        <p>{message}</p>
      </div>
      <div className={styles.buttons}>
        <InputOptions Icon={ThumbUpAltRoundedIcon} title="Like" color="gray" />
        <InputOptions Icon={ChatRoundedIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareRoundedIcon} title="Share" color="gray" />
        <InputOptions Icon={SendRoundedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
