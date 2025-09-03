import '../css/compendium.css'
import { allies, pathogens } from '../data/entries'
import Battles from './Battles'

function BasicEntry({ basicEntry, category }) {
  let entry = null
  if (category === 'allies') entry = allies[basicEntry]
  else if (category === 'enemies') entry = pathogens[basicEntry]
  if (!entry) {
    //console.warn("Cannot find entry: ", entry, basicEntry, category)
    return
  }

  return (
    <>
      <div 
        className="subject"
      >
        <img 
          className='img-card' 
          src={`./${entry.background}`} 
        />
        <div className='container'>
          <p>
            {entry.architype && <strong>{entry.architype.toUpperCase()} </strong>}
            {entry.type && <i>({entry.type.toUpperCase()})</i>}
          </p>
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

      {entry.battles && entry.battles.map((battle, index) => {
        //console.log(battle, battles[battle])
        return (<Battles
          key={battle}
          basicEntry={battle}
          name={battle}
        />)
      })}
    </>
  )
}

export default BasicEntry
