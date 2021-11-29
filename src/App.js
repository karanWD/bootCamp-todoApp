import './App.css';
import "./assets/css/style.css"
import TodoApp from "./components/TodoApp";
import "bootstrap/dist/css/bootstrap.min.css"
import TodoContextProvider from "./contexts/TodoContextProvider";

function App() {
    return (
        <section className="App">
            <TodoContextProvider>
                <TodoApp/>
            </TodoContextProvider>
        </section>
    );
}

export default App;
