import React from "react";
import Colors from "./components/Colors";
import Comments from "./components/comments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Header/Posts";
import Texts from "./components/Texts";
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
      <Texts />
    </div>
  );
};

export default App;
