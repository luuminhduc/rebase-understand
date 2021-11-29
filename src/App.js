import React from "react";
import Colors from "./components/Colors";
import Comments from "./components/comments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Header/Posts";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <Header />
      <Posts />
      <Footer />
      <Comments />
      <Todos />
      <Colors />
    </div>
  );
};

export default App;
