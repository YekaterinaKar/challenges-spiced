import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "Strawberry" },
    { id: 2, name: "Tomate" },
    { id: 3, name: "Melon" },
    { id: 4, name: "Apple" },
    { id: 5, name: "Kiwi" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name }) => (
        <Card key={id} name={name} />
      ))}
    </div>
  );
}
