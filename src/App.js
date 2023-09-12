import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <h1 className="text-center m-[2rem] text-xl font-bold">Shop-React-BusyFit</h1>

      <Filter />

      <ScrollToTopButton />
    </>
  );
}

export default App;
