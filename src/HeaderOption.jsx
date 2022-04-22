import { Avatar } from "@mui/material";
import styles from "./HeaderOption.module.css";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  return (
    <div className={styles.headerOption} onClick={onClick}>
      {Icon && <Icon className={styles.icon} />}
      {avatar && <Avatar className={styles.avatar} src={avatar} />}
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default HeaderOption;
