import '../css/compendium.css'
import { allies, pathogens } from '../data/enteries'

function BasicEntry({ basicEntry, category }) {
  let entry = null
  if (category === 'allies') entry = allies[basicEntry]
  else if (category === 'enemies') entry = pathogens[basicEntry]
  if (!entry) {
    //console.warn("Cannot find entry: ", entry, basicEntry, category)
    return
  }

  return (
    <div 
      className="subject"
      style={{
        backgroundImage: `url(./${entry.background})`
      }}
    >
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

export default BasicEntry
