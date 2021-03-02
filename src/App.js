import "./App.css";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import { useGlobalContext } from "./context";

function App() {
  const { Dark } = useGlobalContext();

  return (
    <div className={`${Dark ? "dark-mode" : "full"}`}>
      <Navbar />
      <ProjectList />
    </div>
  );
}

export default App;
