import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <button onClick={()=>{document.body.style.backgroundColor="blue"}} className="bg" color='blue'>Blue</button>
      <button backgroundColor='green' color='green' onClick={()=>{document.body.style.backgroundColor="green"}}>Green</button>
      <button color='red' onClick={()=>{document.body.style.backgroundColor="red"}}>Red</button>
      <button color='purple' onClick={()=>{document.body.style.backgroundColor="purple"}}>Purple</button>
      <button color='pink' onClick={()=>{document.body.style.backgroundColor="pink"}}>Pink</button>
      <button color='maroon' onClick={()=>{document.body.style.backgroundColor="maroon"}}>Maroon</button>
      <button color='cyan' onClick={()=>{document.body.style.backgroundColor="cyan"}}>Cyan</button>
      <button color='lightblue' onClick={()=>{document.body.style.backgroundColor="lightblue"}}>LigthBlue</button>
      <button color='peach' onClick={()=>{document.body.style.backgroundColor="peach"}}>Peach</button>
    </>
  )
}

export default App
