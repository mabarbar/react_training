import React from "react";

const ListItem = ({ users, posts, comments}) => {
  return <li className="main_li">{JSON.stringify(users)}</li>;
};

export default ListItem;
