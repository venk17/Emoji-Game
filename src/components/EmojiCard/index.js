import React from 'react'
import './index.css'

const EmojiCard = ({emoji, onEmojiClick}) => (
  <div
    className="emoji-card"
    onClick={() => onEmojiClick(emoji.id)}
    role="button"
    tabIndex={0}
  >
    <img src={emoji.emojiUrl} alt={emoji.emojiName} className="emoji-img" />
  </div>
)

export default EmojiCard
