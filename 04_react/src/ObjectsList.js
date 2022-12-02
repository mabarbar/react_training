import React from "react";
import ListItem from "./ListItem";

const ObjectsList = ({ users, posts, comments }) => {
  return (
    <main>
      <ul className="main_ul">
        <ListItem users={users} posts={posts} comments={comments} />
      </ul>
    </main>
  );
};

export default ObjectsList;
