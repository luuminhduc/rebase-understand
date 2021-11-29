import React from "react";
import Comments from "./components/comments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Header/Posts";
import Todos from "./components/Todos";
import Users from "./components/Users";

const App = () => {
  return (
    <div>
      <Header />
      <Posts />
      <Footer />
      <Comments />
      <Todos />
      <Users />
    </div>
  );
};

export default App;
