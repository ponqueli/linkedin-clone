import styles from "./Header.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import HeaderOption from "./HeaderOption.jsx";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />

        <div className={styles.search}>
          <SearchRoundedIcon />
          <input type="text" />
        </div>
      </div>

      <div className={styles.right}>
        <HeaderOption Icon={HomeRoundedIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountRoundedIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" />
        <HeaderOption Icon={ChatRoundedIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications" />
        <HeaderOption
          avatar="https://lh3.googleusercontent.com/a-/AOh14GhtUVPmCuppZkIy50PNiUigf-3R_qd5lRHp7CQRjQ=s83-c-mo"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
