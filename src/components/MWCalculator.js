import React from "react";
import { calculateShards } from "../hooks/useMWCalculator";
import { useState } from "react";
import {v4 as keyGen} from 'uuid'

const MWGemCalculator = props => {
	const [level, setLevel] = useState(1);
	const [count, setCount] = useState()
	const [gems, setGems] = useState("")
	const [errorMargin, setErrorMargin] = useState(0)
	const rangeSelectOptions = (min, max) => {
		let rangeArray = [];
		for(let i = min; i<= max; i++) {
			rangeArray.push(i);
		}
		return rangeArray.map(item => <option value={item} key={keyGen}>{item}</option>)
	}

	return (
		<div>
			<h1>MW Gem Calculator</h1>
			<form>
				<label>Number of gems:
					<input
					value={gems}
					onChange={evt => setGems(evt.target.value)}
				type="number"/></label>
			<select value={level} onChange={evt => setLevel(evt.target.value)}>
				{rangeSelectOptions(1,12)}
			</select>
			<label>Error margin percentage:<input
			type={Number}
			value={errorMargin}
			onChange={evt => setErrorMargin(evt.target.value)}
			/></label>
			</form>
			<div>
				<h2>Calculation Results</h2>
				{errorMargin>0 ? <p>Number of Shards: {calculateShards(gems, level)*(errorMargin/100+1)}</p>: <p>Number of shards: {calculateShards(gems,level)}</p>}
			</div>
		</div>
	)

}
export default MWGemCalculator