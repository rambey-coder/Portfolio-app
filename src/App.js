// import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Work from "./Components/Work";
// import Contact from "./Components/Contact";

function App() {
  return (
    <div className="app">
      <Intro />
      <div className="right-side">
        {/* <Navbar /> */}
        <About />
        <Work />
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
