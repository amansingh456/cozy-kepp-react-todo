import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

  const[expand, setExpand] = useState(false)

  const [note, setNote] = useState({
    title:"",
    content:""
  })

  const inputEvent = (e) =>{
    // const value = e.target.value
    // const name = e.target.value

    const {name,value} = e.target

    setNote((prevData)=>{
      return {
        ...prevData,
        [name]:value
      }
    })

    // console.log(note)
  }

  const addEvent = () =>{
    props.passNote(note)
    setNote({
      title:"",
    content:""
    })
  }

  const expandIt = () =>{
    setExpand(true)
  }

  const backToNormal = () =>{
    setExpand(false)
  }

  return (
    <>
        <div className='main_note' onDoubleClick={backToNormal}>
          
            <form action="">
                {expand ? <input name="title" type="text"  id="" value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off'/> : null}
                <textarea name="content" id="" cols="" rows="" value={note.content} onChange={inputEvent} placeholder='Write a note...' onClick={expandIt}></textarea>
                {expand ? <Button onClick={addEvent}>
                    <AddIcon  className='plus_sign' />
                </Button> : null}
            </form>
        </div>
    </>
  )
}

export default CreateNote