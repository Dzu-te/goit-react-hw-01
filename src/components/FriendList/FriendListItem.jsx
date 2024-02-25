import styles from "./FriendList.module.css";
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
