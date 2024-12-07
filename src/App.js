import "./App.css";
import Hero from "./components/Hero/Hero";
import Summarry from "./components/Summarry/Summarry";

function App() {
  return (
    <div className="bg-black body">
      <h2 className="heading">Expense Tracker</h2>
      <Hero />
      <Summarry />
    </div>
  );
}

export default App;
