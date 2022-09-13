// import './Flashcard.css'
import { useState } from "react";
import React from 'react';
const Flashcard = (props) => {
   const [data, setData] = useState(props.data);
   if(data) {
      return (
      <div className="Flashcard">
         <h1 className="Question">{data.question}</h1>
      <ul className="Answer"><li>{data.answer}</li></ul>
      </div>
   )}
   }

export default Flashcard;