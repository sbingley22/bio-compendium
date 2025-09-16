import { useRef, useState } from 'react'
import '../css/compendium.css'
import { allies, pathogens, battles } from '../data/entries'
import BasicEntry from "./BasicEntry"
import Battles from './Battles'
import Comics from './Comics'

function Compendium() {
  const [showSubject, setShowSubject] = useState(null)
  const [basicEntry, setBasicEntry] = useState(null)
  const mainContentDiv = useRef(null)

  const handleSubjectClick = (sub) => {
    setShowSubject(sub)
    if (sub === "battles") setBasicEntry("battles")
  }

  const handleEntryClick = (e) => {
    if (mainContentDiv.current) {
      setTimeout(
        ()=>window.scrollTo({top: mainContentDiv.current.offsetTop, behavior: "smooth"}),
        10)
    }
    setBasicEntry(e)
  }

  return (
    <div className='main-container'>

      <nav className='navigation'>
        <h1>Bio Compendium</h1>

        <div className='main-categories'>
          <button onClick={()=>handleSubjectClick('allies')}>Allies</button>
          <button onClick={()=>handleSubjectClick('enemies')}>Enemies</button>
          <button onClick={()=>handleSubjectClick('battles')}>Scenarios</button>
          <button onClick={()=>handleSubjectClick('comics')}>Comics</button>
        </div>
      </nav>

      <div className='main-content' ref={mainContentDiv}>
        <div className='main-subjects'>
          {showSubject === 'allies' && <div>
            {Object.keys(allies).map((e) => {
              const formatted = e.replaceAll('-', ' ').replace(/\b\w/g, char => char.toUpperCase());
              
              return (
                <button
                  key={e}
                  onClick={()=>handleEntryClick(e)}
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
                  onClick={()=>handleEntryClick(e)}
                >{formatted}</button>
              )
            })}
          </div>}

        </div>
      </div>

      <div className='subjects'>
        {basicEntry !==null && 
          showSubject === 'battles' ? 
            Object.keys(battles).map((e) => {
              const formatted = e.replaceAll('-', ' ').replace(/\b\w/g, char => char.toUpperCase());
              return (
                <Battles
                  key={formatted}
                  basicEntry={e}
                  name={formatted}
                />)
            })
          : showSubject === 'comics' ?
            <Comics
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
