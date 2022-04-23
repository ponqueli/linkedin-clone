import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import styles from "./HeaderOption.module.css";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div className={styles.headerOption} onClick={onClick}>
      {Icon && <Icon className={styles.icon} />}
      {avatar && (
        <Avatar className={styles.avatar} src={user?.photoUrl}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default HeaderOption;
