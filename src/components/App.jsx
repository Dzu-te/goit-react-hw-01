import { useState } from "react";
import "./App.css";
import userData from "../userData.json";
import Profile from "./Profile/Profile";
import friends from "../friends.json";
import { FriendList } from "./FriendList/FriendList";
import transactions from "../transactions.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
