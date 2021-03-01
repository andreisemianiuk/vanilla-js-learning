import { PlayersType } from './04';

let players: PlayersType[]

beforeEach(() => {
	players = [
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
		},
		{
			id: 4,
			name: 'Mbappe',
			age: 22,
			nationality: 'France',
			position: 'Forward',
			club: {
				country: 'France',
				title: 'PSG'
			},
			achievments: {
				currentSeason: {
					games: 23,
					goals: 18,
					passes: 6
				},
				career: {
					games: 140,
					goals: 98,
					passes: 44 
				}
			}
		},
		{
			id: 5,
			name: 'Neymar',
			age: 29,
			nationality: 'Brasil',
			position: 'Forward',
			club: {
				country: 'France',
				title: 'PSG'
			},
			achievments: {
				currentSeason: {
					games: 11,
					goals: 6,
					passes: 3
				},
				career: {
					games: 288,
					goals: 175,
					passes: 85 
				}
			}
		},
		{
			id: 6,
			name: 'Ibrahimovich',
			age: 39,
			nationality: 'Sweden',
			position: 'Forward',
			club: {
				country: 'Italy',
				title: 'Milan'
			},
			achievments: {
				currentSeason: {
					games: 14,
					goals: 14,
					passes: 1
				},
				career: {
					games: 458,
					goals: 329,
					passes: 95 
				}
			}
		}
	]
})

test('filter players by goals count more than 300', () => {
	const result = players.filter(p => p.achievments.career.goals > 300)

	expect(result.length).toBe(3)
})

test('filter players by passes count more than 100', () => {
	const result = players.filter(p => p.achievments.career.passes > 100)

	expect(result.length).toBe(2)
})

test('players should be from Italy league', () => {
	const result = players.filter(p => p.club.country === 'Italy')

	expect(result.length).toBe(2)
	expect(result[0].name).toBe('Cristiano Ronaldo')
})