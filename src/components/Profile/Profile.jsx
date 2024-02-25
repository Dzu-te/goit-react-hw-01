import styles from "./Profile.module.css";
const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png";
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <img
          className={styles.imgAvatar}
          src={avatar || defaultAvatar}
          alt="User avatar"
        />
        <p className={styles.userName}>{username}</p>
        <p className={styles.userTag}>{`@${tag}`}</p>
        <p className={styles.userLocation}>{location}</p>
      </div>

      <ul className={styles.listUserStats}>
        <li className={styles.itemUserStats}>
          <span className={styles.namesStat}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.itemUserStats}>
          <span className={styles.namesStat}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.itemUserStats}>
          <span className={styles.namesStat}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
