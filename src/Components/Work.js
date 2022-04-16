import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div className="wrk-container" id='work'>
        <div className="sub-wrk">
            <div className="first">
                <h1>PROJECTS.</h1>
                <div></div>
                </div>

                <div className='work-place'>
                  <div className='cont1'>
                    <img src='/Assets/bitcoin-rate.png' alt='projects' className='bitcoin'/>

                    <h3>Crypto Live Rate</h3>
                  </div>

                  {/* <div className='cont1'>
                    <img src='/Assets/bitcoin-rate.png' alt='projects' className='bitcoin'/>

                    <h3>Crypto Live Rate</h3>
                  </div> */}
                </div>
        </div>
    </div>
  )
}

export default Work