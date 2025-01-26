import "./App.css";
import Navbar from "./components/Navbar";
// import ShowNote from './components/notes/ShowNote';
import Ledger from './components/Ledgers/Ledger'
// import AutoSelectRowTable from "./components/Ledgers/autoselectedrow";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ShowNote /> */}
      <Ledger />
      {/* <AutoSelectRowTable /> */}
    </div>
  );
}

export default App;
