import { PlayersType } from '../4_Filter/04'

let messi: PlayersType

beforeEach(() => {
	messi = {
		id: 1,
		name: 'Messi',
		age: 33,
		nationality: 'Argentina',
		position: 'Forward',
		club: {
			country: 'Spain',
			title: 'Barcelona'
		},
		achievments: {
			currentSeason: {
				games: 23,
				goals: 19,
				passes: 4
			},
			career: {
				games: 831,
				goals: 689,
				passes: 242 
			}
		}
	}
})

test('destucturing should be correct', () => {
	const {id,name,age,nationality,position,club:{title,country},achievments:{currentSeason,career}} = messi

	expect(id).toBe(1)
	expect(name).toBe('Messi')
	expect(age).toBe(33)
	expect(nationality).toBe('Argentina')
	expect(position).toBe('Forward')
	expect(title).toBe('Barcelona')
	expect(country).toBe('Spain')
	expect(currentSeason.games).toBe(23)
	expect(currentSeason.goals).toBe(19)
	expect(currentSeason.passes).toBe(4)
	expect(career.games).toBe(831)
	expect(career.goals).toBe(689)
	expect(career.passes).toBe(242)
})