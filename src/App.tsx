import classes from "./App.module.css";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
    return (
        <>
            <Header></Header>
            <main>
                <Services />
            </main>
        </>
    );
}

export default App;
