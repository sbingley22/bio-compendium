import { useState } from 'react'
import '../css/compendium.css'
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
        {entry.text.map((p, index) => {
          const isBold = p[0] === '*' && p[p.length -1] === '*'
          const content = isBold ? p.slice(1,-1) : p
          return (
            <p key={'text'+index}>
              {isBold ? <strong><i>{content}</i></strong> : content}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default BasicEntry
