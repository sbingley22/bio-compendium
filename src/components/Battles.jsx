import { useState } from 'react'
import '../css/compendium.css'
import { battles } from '../data/entries'

const styles = {
  container: {
    width: "100%",
    background: '#111',
    border: '1px solid #333',
    margin: 0,
    padding: 0,
  },
  toggle: {
    width: "100%",
    color: '#999',
  },
  content: {
    width: "100%",
  },
  contentText: {
    width: "100%",
  },
}

function Battles({ basicEntry, name=null }) {
  const entry = battles[basicEntry]
  if (!entry) {
    console.warn("Cannot find entry: ", entry, basicEntry)
    return
  }
  //console.log("battle entry: ", basicEntry)

  const [showBattle, setShowBattle] = useState(false)

  const handleToggle = (e) => {
    if (!showBattle) {
      // scroll to battle div
      setTimeout(() => {
        window.scrollTo({top: e.target.offsetTop, behavior: "smooth"})
      }, 10)
    }
    setShowBattle(!showBattle)
  }

  return (
    <div 
      style={styles.container}
    >
      <div 
        style={styles.toggle}
        onClick={(e)=>handleToggle(e)}
      >
        <span>{name}</span>
        {showBattle && <span> ^</span>}
      </div>

      {showBattle && <div style={styles.content}>
        <img src={entry.background} />

        <div style={styles.contentText}>
          {entry.type && <p><strong>{entry.type.toUpperCase()}</strong></p>}
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
      </div>}

    </div>
  )
}

export default Battles
