import React from 'react'
import './index.css'

const WinOrLoseCard = ({isGameWon, onPlayAgain}) => (
  <div className="game-result">
    <h1>{isGameWon ? 'You Won' : 'You Lose'}</h1>
    {isGameWon ? <p>Best Score: 12/12</p> : <p>Score: 0</p>}
    <button type="button" className="play-again-btn" onClick={onPlayAgain}>
      Play Again
    </button>
    <img
      src={
        isGameWon
          ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      }
      alt="win or lose"
      className="game-result-img"
    />
  </div>
)

export default WinOrLoseCard
