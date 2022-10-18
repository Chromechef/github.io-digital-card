import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import logo from './assets/meBlackAndWhite.jpeg'
import logoLi from './assets/Li-In-Bug.png'
import logoGh from './assets/GitHub-Mark.png'
import './App.css'

function App() {


  return (
    <div className="App">
      <div className='card-container'>
        <img src={logo} className="main-image" alt="Black and white photo of Jimmy" />
        <h1>JIMMY JOHNSTON<span className='block'>Frontend Developer</span></h1>
        <a href="https://cerulean-gelato-389639.netlify.app">Web To Table Designs</a>
        <button><a href="mailto: jimmy@webtotabledesigns.com" id="email-footer">Email</a></button>
        <h2>About Me</h2>
        <p>I am a CIA Hyde Park alum and have been in the culinary industry for over 20 years. Ten of those spent as a mentor, leader, and chef. I have always held an interest in programming. Now I have taken effort into putting my experiences to work for your business.</p>
        <h2>Interests</h2>
        <p>I hold a great passion for cooking and now mostly cook for my little one expanding her pallet. Spending time with my family, golfing, and painting miniatures take most of my free time.</p>

        <footer>
          <a href="https://www.linkedin.com/in/jimmy-johnston-2b9994226/"><img className="logo-width"
            src={logoLi} alt="Linked In logo" /></a>
          <a href="https://github.com/Chromechef"><img className="logo-width"
            src={logoGh} alt="Git Hub logo" /></a>

        </footer>

      </div>

    </div>
  )
}

export default App
{/* <img className='logo-item' src={logoLi} alt="Linked In logo" />
          <img className='logo-item' src={logoGh} alt="Git Hub logo" /> */}