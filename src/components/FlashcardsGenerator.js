import { useState } from "react"

import React from 'react'
import CopyToClipboard from "react-copy-to-clipboard";
const FlashcardsGenerator = () => {
 const [cards, setCards] = useState([]);
 const [question, setQuestion] = useState("")
 const [answer, setAnswer] = useState("")
 
  
 
 const handleAdd = (evt) => {
  evt.preventDefault()
  setCards([...cards, {question: question, answer: answer}])
  setAnswer("")
  setQuestion("")
 }
 return (
  <div>
   <div>
    <form>
    <label>Question</label>
    <input
    type="text"
    name="question"
    onChange={evt => setQuestion(evt.target.value)}
    value={question}/>
    <label>Answer:</label>
    <input
    type="text"
    name="answer"
    onChange={evt => setAnswer(evt.target.value)}
    value={answer}/>

    <button onClick={handleAdd}>New Card</button>
   </form>
   </div>
   <div>
    
    
     {cards?.length > 0 ? <p>{JSON.stringify(cards)}</p>: <p></p>}
     {cards?.length >0 ? <CopyToClipboard text={JSON.stringify(cards, null, "\t")}><button>Click to copy</button></CopyToClipboard>: <p>Nothing to display</p>}
   </div>
  </div>
 )
}

export default FlashcardsGenerator