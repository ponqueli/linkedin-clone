import styles from "./Header.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import HeaderOption from "./HeaderOption.jsx";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";
import toast, { Toaster } from "react-hot-toast";

const Header = (props) => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
    toast('You left us! Come back soon!', {
      icon: '😭',
    });
  }
  
  return (
    <div className={styles.header}>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.left}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />

        <div className={styles.search}>
          <SearchRoundedIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className={styles.right}>
        <HeaderOption Icon={HomeRoundedIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountRoundedIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" />
        <HeaderOption Icon={ChatRoundedIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications" />
        <HeaderOption
          avatar={true}
          title="Me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
