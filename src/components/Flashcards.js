import {v4 as keyGen} from 'uuid'
import React, {useState} from "react";
import Flashcard from "./Flashcard";
import useSWR from "swr";
import { fetcher, shuffle} from './Helpers';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import './Flashcards.css'


const Flashcards = (props) => {
  const [title, setTitle] = useDocumentTitle(props.siteTitle+": Flashcards")
 const [sourceData, setSourceData] = useState('');
 const [cards, setCards] = useState([]);
  const [processedData, setProcessedData] = useState();
  const [cardIndex, setCardIndex] = useState(0);
  
   const handleSubmit = (evt) => {
  evt.preventDefault()
  setCards(JSON.parse(sourceData).map(i => <Flashcard data={i} key={keyGen()}></Flashcard>))
   }
  const onInputChange = (evt) => setSourceData(evt.target.value)
  const onCardChange = (index) => {
    if(cards) {
      return cards[index]
    }
    return <p>Nothing to display</p>
  }
  const deleteCard = (cards, cardIndex) => {
    return [...cards.slice(0, cardIndex), ...cards.slice(cardIndex+1)];
  }
  

return (
 <div className="Flashcards">
  <h1>Flashcard reader Utility</h1>
  <div>
  <form className="flashcardsInputs">
    <label>Paste flashcard data here:<textarea aria-required={true} onChange={onInputChange} value={sourceData}></textarea> </label>
    <button onClick={handleSubmit}>Evaluate set</button>
    </form>
    </div>
    <div>
      {cards?.length > 0 ? cards[cardIndex]: <p>Paste your flashcard data, or try pressing "evaluate" again to see your new cards appear.</p>}

    {cards?.length >0? <p>Card: {cardIndex+1}</p>: <p> </p>}
      <button onClick={evt => cardIndex<=0?setCardIndex(0):setCardIndex(cardIndex-1)}>Previous Card</button>
      <button
      onClick={() => setCards(shuffle(cards.slice()))}>Shuffle Cards</button>
      <button onClick={() => setCards(deleteCard(cards, cardIndex))}>Delete Card</button>
      <button onClick={evt => cardIndex < cards?.length-1? setCardIndex(cardIndex+1): setCardIndex(cardIndex)}>Next Card</button>
 </div>
 </div>)
  }
export default Flashcards;