import '../css/compendium.css'
import { battles } from '../data/enteries'

function Battles({ basicEntry }) {
  const entry = battles[basicEntry]
  if (!entry) {
    console.warn("Cannot find entry: ", entry, basicEntry)
    return
  }
  //console.log("battle entry: ", basicEntry)

  return (
    <div 
    >
      <img src={entry.background} />

      <div className='container'>
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
    </div>
  )
}

export default Battles
