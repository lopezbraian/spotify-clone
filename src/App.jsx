import "./App.css";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Plans from "./components/Plans/Plans";

function App() {
  return (
    <div id="app">
      <Menu />
      <Hero />
      <Plans />
    </div>
  );
}

export default App;
