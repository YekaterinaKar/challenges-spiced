import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Its my article</h1>
      <p>its a paragraph of my article</p>
    </article>
  );
}
