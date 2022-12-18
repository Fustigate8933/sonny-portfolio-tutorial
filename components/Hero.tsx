import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "this is the first sentence", 
      "this is the second sentence", 
      "this is the third sentence"
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div>
        <p>animation: {text}</p>
    </div>
  )
}

export default Hero