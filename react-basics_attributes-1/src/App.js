import React from "react";
import "./styles.css";

export default function App() {
  return <Article1 />;
}

function Article1() {
  return (
    <article>
      <h2 className="article_title"> Its my h2-element </h2>
      <label> What is it </label>
      <a
        className="article_link"
        href="https://github.com/spiced-academy/sugar-web-dev/blob/main/week5/2023-03-16-Thursday.md"
      >
        this is my anchot tag
      </a>
    </article>
  );
}
