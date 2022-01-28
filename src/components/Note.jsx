import React from "react";
import styled from "styled-components";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }
  return (
     <Notetext>
       <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
     </Notetext>
  );
}

export default Note;

const Notetext=styled.div`
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 240px;
    margin: 16px;
    float: left;
    h1 {
      font-size: 1.1em;
      margin-bottom: 6px;
    };
    p {
      font-size: 1.1em;
      margin-bottom: 10px;
      white-space: pre-wrap;
      word-wrap: break-word;
    };
    button {
      position: relative;
      float: right;
      margin-right: 10px;
      color: #f5ba13;
      border: none;
      width: 36px;
      height: 36px;
      cursor: pointer;
      outline: none;
    };
`
