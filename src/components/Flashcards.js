import {v4 as keyGen} from 'uuid'
import React, {useState} from "react";
import Flashcard from "./Flashcard";
import useSWR from "swr";
import { fetcher} from './Helpers';


const Flashcards = (props) => {
 const [sourceData, setSourceData] = useState('');
 const [cards, setCards] = useState();
  const [processedData, setProcessedData] = useState();
  const [cardIndex, setCardIndex] = useState(0);
  
   const handleSubmit = (evt) => {
  evt.preventDefault()
  setProcessedData(JSON.parse(sourceData))
  setCards(processedData.map(i => <Flashcard data={i} key={keyGen()}></Flashcard>))
   }

  const onInputChange = (evt) => setSourceData(evt.target.value)
  const onCardChange = (index) => {
    if(cards) {
      return cards[index]
    }
    return <p>Nothing to display</p>
  }

return (
 <div>
  <div>
  <form onSubmit={handleSubmit}>
    <label>Paste flashcard data here:<textarea aria-required={true} onChange={onInputChange} value={sourceData}></textarea> </label>
    <input type="submit"/>
    </form>
    </div>
    <div>
      {cards?.length > 0 ?  onCardChange(cardIndex): <p>Paste your flashcard data, or try pressing submit again to see your new cards appear.</p>}

      <p>Card: {cardIndex+1}</p>
      <button onClick={evt => cardIndex<=0?setCardIndex(0):setCardIndex(cardIndex-1)}>Previous Card</button>
      <button onClick={evt => cardIndex < cards?.length-1? setCardIndex(cardIndex+1): setCardIndex(cardIndex)}>Next Card</button>
 </div>
 </div>)
  }
export default Flashcards;