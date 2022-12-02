import React from "react";
import "./Content.css";

const Content = ({ users, posts, comments }) => {
  return (
    <main>
      <ul className="main_ul">
        <li className="main_li">{JSON.stringify(users)}</li>
        <li className="main_li">2</li>
        <li className="main_li">3</li>
      </ul>
    </main>
  );
};

export default Content;
