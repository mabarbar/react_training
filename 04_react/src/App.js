import "./App.css";
import Navigation from "./Navigation.js";
import Content from "./Content.js";

const users = {
  id: 1,
  name: "Mati",
  username: "Matik645",
};

const posts = {
  userId: 1,
  id: 1,
  title: "elo",
  body: "nara",
};

const comments = {
  postId: 1,
  id: 1,
  email: "mateusz.barzenc00@gmail.com",
};

function App() {
  return (
    <div>
      <Navigation />
      <Content
        users={users}
        posts={posts}
        comments={comments}
      />
    </div>
  );
}

export default App;
