import React, { useState, useEffect }  from "react";
import Navbar from './Components/Navbar'
import Intro from "./Components/Intro";
import HashLoader from "react-spinners/HashLoader";
import About from "./Components/About";
import Work from "./Components/Work";

function App() {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 6000)
    },[])

    const override = `
      background: none;
    `

  return (
    <div className="App">
      {
        loading ? 

        <div className="loaders">
        <HashLoader
        className='loader'
        size={50}
        background='transparent'
        css={override}
        color={"#3d2c8d"}
        loading={loading}
        />
        </div>

        :

        <div>
        <Navbar />
        <Intro />
        <About />
        <Work />
        </div>
      }

    </div>
  );
}

export default App;
