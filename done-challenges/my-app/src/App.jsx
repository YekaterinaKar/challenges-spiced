import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { InputField } from "./Components/InputField/InputField";
import { Button } from "./Components/Button/Button";
import { Tab } from "./Components/Tab/Tab";

function App() {
    return (
        <>
            <Header text="Journal" />

            <InputField text="Motto" text2="Notes" />
            <Button text="Create" />
            <Tab text="All entries" counter="3" />
            <Tab text="Favourites" counter="5" />
            <Footer text="Journal App-2028" />
        </>
    );
}

export default App;
