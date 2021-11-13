import "./App.css";
import Credit from "./Credit";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <Dictionary defaultkeyword="sunset" />
      <Credit />
    </div>
  );
}

export default App;
