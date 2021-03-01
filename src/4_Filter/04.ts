export type PlayersType = {
	id: number
	name: string
	age: number
	nationality: string
	position: string
	club: ClubType
	achievments: AchievmentsType 
}

export type AchievmentsType = {
	currentSeason: StatType
	career: StatType
}

export type StatType = {
	games: number
	goals: number
	passes: number
}

export type ClubType = {
	country: string
	title: string
}

export const players: PlayersType[] = [
	{
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
	},
	{
		id: 2,
		name: 'Cristiano Ronaldo',
		age: 36,
		nationality: 'Portugal',
		position: 'Attacking midfielder',
		club: {
			country: 'Italy',
			title: 'Juventus'
		},
		achievments: {
			currentSeason: {
				games: 20,
				goals: 19,
				passes: 3
			},
			career: {
				games: 571,
				goals: 466,
				passes: 125 
			}
		}
	},
	{
		id: 3,
		name: 'Salah',
		age: 28,
		nationality: 'Egypt',
		position: 'Attacking midfielder',
		club: {
			country: 'England',
			title: 'Liverpool'
		},
		achievments: {
			currentSeason: {
				games: 25,
				goals: 17,
				passes: 3
			},
			career: {
				games: 310,
				goals: 147,
				passes: 59 
			}
		}
	}
]