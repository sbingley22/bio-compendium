import { useState } from 'react'
import '../css/compendium.css'
import { allies, pathogens, battles } from '../data/enteries'
import BasicEntry from "./BasicEntry"
import Battles from './Battles'

function Compendium() {
  const [showSubject, setShowSubject] = useState(null)
  const [basicEntry, setBasicEntry] = useState(null)

  const handleSubjectClick = (sub) => {
    setShowSubject(sub)
  }

  return (
    <div className='main-container'>

      <div className='navigation'>
        <h1>Bio Compendium</h1>

        <div className='main-categories'>
          <button onClick={()=>handleSubjectClick('allies')}>Allies</button>
          <button onClick={()=>handleSubjectClick('enemies')}>Enemies</button>
          <button onClick={()=>handleSubjectClick('battles')}>Battles</button>
        </div>

        <div className='main-subjects'>
          {showSubject === 'allies' && <div>
            {Object.keys(allies).map((e) => {
              const formatted = e.replaceAll('-', ' ').replace(/\b\w/g, char => char.toUpperCase());
              
              return (
                <button
                  key={e}
                  onClick={()=>setBasicEntry(e)}
                >{formatted}</button>
              )
            })}
          </div>}

          {showSubject === 'enemies' && <div>
            {Object.keys(pathogens).map((e) => {
              const formatted = e.replaceAll('-', ' ').replace(/\b\w/g, char => char.toUpperCase());
              
              return (
                <button
                  key={e}
                  onClick={()=>setBasicEntry(e)}
                >{formatted}</button>
              )
            })}
          </div>}

          {showSubject === 'battles' && <div>
            {Object.keys(battles).map((e) => {
              const formatted = e.replaceAll('-', ' ').replace(/\b\w/g, char => char.toUpperCase());
              
              return (
                <button
                  key={e}
                  onClick={()=>setBasicEntry(e)}
                >{formatted}</button>
              )
            })}
          </div>}
        </div>
      </div>

      <div className='subjects'>
        {basicEntry !==null && 
          showSubject === 'battles' ? 
            <Battles
              basicEntry={basicEntry}
            />
          :
            <BasicEntry
              basicEntry={basicEntry}
              category={showSubject}
            />
        }
      </div>
    </div>
  )
}

export default Compendium
