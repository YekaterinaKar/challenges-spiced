import "./styles.css";

export default function App() {
  return <Greeting name="Katja" />;
}

function Greeting({ name }) {
  return <p>Hello {name}!</p>;
}
