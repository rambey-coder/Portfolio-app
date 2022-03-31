import React from "react";
import { useState, useEffect } from "react";
import Navbar from './Components/Navbar'
import Intro from "./Components/Intro";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 9000)
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
        className= 'loader'
        size={50}
        background='transparent'
        css={override}
        color={"#B01CCC"}
        loading={loading}
        />
        </div>

        :

        <>
        <Navbar />
        <Intro />
        </>
      }

    </div>
  );
}

export default App;
