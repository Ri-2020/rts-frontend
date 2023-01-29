import React from 'react'

function Home() {
  return (
    <div className="homeBox">
        <div  className=' darkBorder headerBorder'>
                welcome to raah towards success
        </div>
        <div className='centerBlock'>
            <div className='someAboutText'>
                a <b>boot camp</b> organizer group in rajkiya engineering college azamgarh
            </div>
            <div className='aboutButton'>
                <div className='inside'>
                    About
                </div>
            </div>
        </div>
        <div className='loginBox'>
            <div className='inpHead'>
                . get into it .
            </div>
            <div className='inputControl'>
                <div className='inputboxes'>
                    <label>
                        <span>Email:</span> <br/><input type="email" />
                    </label>
                    <label>
                       <span> Password:</span> <br/><input type="email" />
                    </label>
                </div>
                <div className='submitButton'>
                    <div className='inside'>
                        Login
                    </div>
                </div>
            </div>
        </div>
        <div className='meme'>
            <img src='https://preview.redd.it/cqzm8q6sgal61.png?auto=webp&s=a4d968d60e307a790fcd9340285099dd48073ed9' alt='it is supposed to be meme? where is it? hmm.'/>
        </div>
    </div>
  )
}

export default Home 