import React from "react";
import Colors from "./components/Colors";
import Comments from "./components/comments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Header/Posts";
import Images from "./components/Images";
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
      <Colors />
      <Images />
    </div>
  );
};

export default App;
