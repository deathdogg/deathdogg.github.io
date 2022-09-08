import { useState } from "react";
import React from 'react';
const Flashcard = (props) => {
   const [data, setData] = useState(props.data);
   if(data) {
      return (
      <div>
         <h1>{data.question}</h1>
      <ul><li>{data.answer}</li></ul>
      </div>
   )}
   }

export default Flashcard;