import React, {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    isGameOver: false,
    isGameWon: false,
  }

  handleEmojiClick = emojiId => {
    const {clickedEmojis, score, topScore} = this.state
    if (clickedEmojis.includes(emojiId)) {
      // Game lost when the same emoji is clicked
      this.setState({
        isGameOver: true,
        isGameWon: false,
      })
    } else {
      // Emoji clicked for the first time
      const newScore = score + 1
      const updatedClickedEmojis = [...clickedEmojis, emojiId]

      // If all emojis are clicked, it's a win
      if (updatedClickedEmojis.length === 12) {
        this.setState({
          isGameOver: true,
          isGameWon: true,
          clickedEmojis: updatedClickedEmojis,
          score: newScore,
          topScore: Math.max(newScore, topScore),
        })
      } else {
        this.setState({
          score: newScore,
          clickedEmojis: updatedClickedEmojis,
          topScore: Math.max(newScore, topScore),
        })
      }
    }
  }

  handlePlayAgain = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      isGameOver: false,
      isGameWon: false,
    })
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, isGameOver, isGameWon} = this.state

    return (
      <div className="emoji-game">
        <NavBar score={score} topScore={topScore} />

        {isGameOver ? (
          <WinOrLoseCard
            isGameWon={isGameWon}
            onPlayAgain={this.handlePlayAgain}
          />
        ) : (
          <div>
            <h1>Emoji Game</h1>
            <div className="emoji-cards-container">
              <ul>
                {emojisList.map(emoji => (
                  <li key={emoji.id}>
                    <button
                      type="button"
                      onClick={() => this.handleEmojiClick(emoji.id)}
                    >
                      <img
                        src={emoji.emojiUrl}
                        alt={emoji.emojiName}
                        className="emoji-img"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
