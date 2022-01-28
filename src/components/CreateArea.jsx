import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {

  const [check,setCheck]=useState(false);
  const [note,setNote]=useState({title:"",content:""});

  function handleChange(event)
  {
    const {name,value}=event.target;
    setNote(previous=>{
      return{
        ...previous,[name]:value
      };
    })
  }

  function expand()
  {
    setCheck(true);
  }

  function submitNote(event)
  {
     props.onAdd(note);
     setNote({note:"",content:""});
     event.preventDefault();
  }

  return (
   <CreateNote>
     {check && <input name="title" onChange={handleChange} value={note.title} placeholder='Title'/>}
     <textarea name="content" onChange={handleChange} value={note.content} placeholder='Content' onClick={expand} rows={check ? 3:1}/>
     <Fab onClick={submitNote}><AddIcon /></Fab>
   </CreateNote>

  );
}

export default CreateArea;

const CreateNote=styled.div`
position: relative;
width: 480px;
margin: 30px auto 20px auto;
background: #fff;
padding: 15px;
border-radius: 7px;
box-shadow: 0 1px 5px rgb(138, 137, 137);

input,textarea {
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
  };
  button {
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
  };

`
