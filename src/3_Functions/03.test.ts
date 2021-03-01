import { StudentType } from '../2_Objects/02'
import { addNewTech } from './03'

let student: StudentType
let tech: string

beforeEach(() => {
	student = {
		id: 1,
		name: 'Andrei',
		age: 32,
		isActive: true,
		address: {
			country: 'Belarus',
			city: 'Minsk',
			street: {
				title: 'Zhynovicha',
				house: 11,
				flat: 20
			}
		},
		technologies: [
			{
				id: 1,
				title: 'HTML'
			},
			{
				id: 2,
				title: 'CSS'
			},
			{
				id: 3,
				title: 'JS'
			}
		]
	}
	tech = 'TypeScript'
})

test('new added technology shoul be TypeScript', () => {
	addNewTech(student.technologies, tech)
	expect(student.technologies[3].title).toBe('TypeScript')
})
