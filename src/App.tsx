import React from 'react'
import { players } from './4_Filter/04'
import { Destructuring } from './6_Destructuring/06'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Destructuring messi={players[0]} />
		</div>
	)
}

export default App
