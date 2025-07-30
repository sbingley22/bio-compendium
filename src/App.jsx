import { useState } from 'react'
import './App.css'
import { basicEnteries } from './data/enteries'
import BasicEntry from "./components/BasicEntry"

const allies = []
const enemies = []

Object.keys(basicEnteries).forEach(name => {
  const entry = basicEnteries[name]
  if (entry.category === 'allies') allies.push(name)
  else if (entry.category === 'enemies') enemies.push(name)
})

function App() {
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
            {allies.map((e) => (
              <button
                key={e}
                onClick={()=>setBasicEntry(e)}
              >{e}</button>
            ))}
          </div>}
        </div>
      </div>

      <div className='subjects'>
        {basicEntry !==null && 
          <BasicEntry
            basicEntry={basicEntry}
        />}
      </div>
    </div>
  )
}

export default App
