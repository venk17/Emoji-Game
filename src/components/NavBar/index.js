import React from 'react'
import './index.css'

const NavBar = ({score, topScore}) => (
  <nav className="navbar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
      alt="emoji logo"
      className="game-logo"
    />
    <div className="score-container">
      <p className="score">Score: {score}</p>
      <p className="score">Top Score: {topScore}</p>
    </div>
  </nav>
)

export default NavBar
