import { PlayersType } from '../4_Filter/04';

export const getSumOfGoalsAndPasses = (arr: PlayersType[]) => {
	return arr.map(p => p.achievments.career.goals + p.achievments.career.passes)
}