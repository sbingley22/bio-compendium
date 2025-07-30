import { useState } from 'react'
import '../App.css'
import { basicEnteries } from '../data/enteries'

function BasicEntry({ basicEntry }) {
  const entry = basicEnteries[basicEntry]
  if (!entry) {
    console.warn("Cannot find entry: ", entry)
  }

  return (
    <div 
      className="subject"
      style={{
        backgroundImage: `url(./${entry.background})`
      }}
    >
      <div className='container'>
        {entry.text.map((p, index) => (
          <p key={'text'+index}>{p}</p>
        ))}
      </div>
    </div>
  )
}

export default BasicEntry
