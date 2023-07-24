import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from './About';
import ArticleList from './ArticleList';
import data from '../data/blog';


console.log(blogData);

function App() {
  return (
    <>
    <Header name="OVERREACTED"/>
    <About image="your_image_url_here" about="Personal blog by Dan Abramov I explain with words and code" />
      <ArticleList posts={data.posts} />
     
    </>
  );
}

export default App;
