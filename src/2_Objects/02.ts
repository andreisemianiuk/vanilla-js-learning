export type StudentType = {
	id: number
	name: string
	age: number
	isActive: boolean
	address: AddressType
	technologies: TechType[]
}

type AddressType = {
	country: string
	city: string
	street: StreetType
}

type StreetType = {
	title: string
	house: number
	flat: number
}

export type TechType = {
	id: number
	title: string	
}

export const student: StudentType = {
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