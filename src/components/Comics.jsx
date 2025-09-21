import { useState } from 'react'

const comics = [
  ["Strep Infection", "/html/strep-infection.html"],
  ["Biosea Alt universe", "/html/biosea.html"]
]

function Comics({}) {
  const [selected, setSelected] = useState(null)

  const comicSelected = (selection) => {
    setSelected(selection)
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: '0',
        padding: '0',
      }}
    >
      {comics.map((c) => (
        <button 
          key={c[0]}
          onClick={()=>comicSelected(c[1])}
        >
          {c[0]}
        </button>
      ))}

      {selected && (
        <iframe
          src={selected}
          style={{width: "100%", height: "90vh", border: "1px solid #ccc", marginTop: "1rem" }}
        />
      )}
    </div>
  )
}

export default Comics
