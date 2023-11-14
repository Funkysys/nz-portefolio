'use client'

import React from 'react'
import {useSound} from 'use-sound'
const Player = () => {
  const [player] = useSound("/assets/son/biosite.wav", {
    interrupt: true,
  })
  return (
    <div className="playbio">
        <button onClick={player}></button>
    </div>
  )
}

export default Player