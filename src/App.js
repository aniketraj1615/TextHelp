import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textutiles from "./Components/Textutiles";
import Aboutpage from "./Components/Aboutpage";
function App() {
  return (
    <>
      <Navbar title={"TextHelp"} />
      <div className="container">
        <Textutiles heading="Enter your text below" />
      </div>
    </>
  );
}

export default App;
