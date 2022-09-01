import "./App.css";
import Header from "./component/Header";
const name = "Punit";
const x = true;
function App() {
  return (
    <div className="App">

      <Header/>
      {/* <Header title="Punit"/> */}
      <h1>{name}</h1>
      <h2>{12+8}</h2>
      <h2>{x ? "Yes" : "No"}</h2>
    </div>
  );
}

export default App;
