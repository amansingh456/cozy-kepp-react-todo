import React, {useState} from 'react'
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import CreateNote from './Components/CreateNote.jsx'
import AllNotes from './Components/AllNotes.jsx'

const App = () => {
  const [addItem, setAddItem] = useState([])

  const addNote = (note) =>{
    setAddItem((oldData)=>{
      return [...oldData, note]
    })
    console.log(note)
  }

  const onDelete = (id) =>{
    setAddItem((oldData)=>
    oldData.filter((el,ind)=>{
      return ind !== id
    })
    )
  }

  return (
    <div>
      <Header />
      <CreateNote  passNote={addNote}/>
        {addItem.map((el,ind)=>{
          return <AllNotes key={ind} id={ind} title={el.title} content={el.content} deleteItem = {onDelete} />
        })}
      <Footer />
    </div>
  )
}

export default App


// Hii this is Aman Singh Rajawat