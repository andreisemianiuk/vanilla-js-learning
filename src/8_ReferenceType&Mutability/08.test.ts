export type ManType = {
	name: string
	age: number
}

let people: ManType[]

beforeEach(() => {
	people = [
		{
		name: 'Andrey',
		age: 32
	},
	{
		name: 'Vika',
		age: 24
	}
]
})

test('change people age and name', () => {
	const me = people[0]
	const she = people[1]

	me.age++
	she.name = 'Vikulya'

	expect(people[0].age).toBe(33)
	expect(people[1].name).toBe('Vikulya')
})

