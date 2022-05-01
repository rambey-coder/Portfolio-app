import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div className="work-container" id='work'>
        <div className="sub-wrk">
            <div className="first">
                <h1>PROJECTS.</h1>
                <div></div>
                </div>

                <div className='work-place'>
                    <div className='general-cont'>

                    <a href='https://live-rate.netlify.app/' target='_blank'><div className='cont1'></div></a>

                      <h3><a href='https://live-rate.netlify.app/' target='_blank'>
                        Crypto Live Rate
                      </a></h3>

                      <div className='cont-details'>
                        <div>REACT JS</div>
                        <div>AXIOS</div>
                        <div>CRYPTO CURRENCY API</div>
                      </div>
                      
                    </div>

                    <div className='general-cont'>

                    <a href='https://clone-unsplash-app.netlify.app/' target='_blank'><div className='cont2'></div></a>

                      <h3><a href='https://clone-unsplash-app.netlify.app/' target='_blank'>
                        Unsplash Clone
                      </a></h3>

                      <div className='cont-details'>
                        <div>REACT JS</div>
                        <div>AXIOS</div>
                        <div>UNSPLASH API</div>
                      </div>

                    </div>

                    <div className='general-cont'>

                    <a href='https://converter-crypto.netlify.app/' target='_blank'><div className='cont3'></div></a>

                      <h3><a href='https://converter-crypto.netlify.app/' target='_blank'>
                        Currency Converter & News
                      </a></h3>

                      <div className='cont-details'>
                        <div>REACT JS</div>
                        <div>AXIOS</div>
                        <div>RAPID API</div>
                      </div>

                    </div>

                    <div className='general-cont'>

                    <a href='https://cointrades.netlify.app/' target='_blank'><div className='cont4'></div></a>

                      <h3><a href='https://cointrades.netlify.app/' target='_blank'>
                        Coin.com
                      </a></h3>

                      <div className='cont-details'>
                        <div>REACT JS</div>
                        <div>TAILWINDCSS</div>
                        <div>COINGECKO API</div>
                      </div>

                    </div>
                </div>
        </div>
    </div>
  )
}

export default Work