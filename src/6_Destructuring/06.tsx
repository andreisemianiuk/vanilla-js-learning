import React from 'react'
import { PlayersType } from '../4_Filter/04'


export type MessiPropsType = {
	messi: PlayersType
}

export function Destructuring({ messi: { name, age, nationality, club, achievments, id, position } }: MessiPropsType) {

	return (
		<div>
			<div>{id} : <b>{name}</b></div>
			<div>Club: <b>{club.title}</b><span> {club.country}</span></div>
			<div>Nationality: <b>{nationality}</b></div>
			<div>Age: <b>{age}</b></div>
			<div>Position: <b>{position}</b></div>
			<div>
				<div><b>Achievments:</b></div>
				<div>this season:</div>
				<div>matches: <b>{achievments.currentSeason.games}</b></div>
				<div>games: <b>{achievments.currentSeason.goals}</b></div>
				<div>passes: <b>{achievments.currentSeason.passes}</b></div>

				<div>all time:</div>
				<div>matches: <b>{achievments.career.games}</b></div>
				<div>games: <b>{achievments.career.goals}</b></div>
				<div>passes: <b>{achievments.career.passes}</b></div>
			</div>
		</div>
	)
}