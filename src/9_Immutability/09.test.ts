import { changeCostOfProduct, changeCupon, changeCustomer, Customer, decreaseBudget, EducationType, Product, pushProduct, removeCupon, updateUniversity } from './09'

let customer1: Customer
let newPurchase:Product
let newCost: number
let product: string
let newCupon: string
let oldCupon: string
let requiredCupon: string
let upgraded: Customer

let education: EducationType
let student: string
let newUniversityTitle: string
let oldUniversityTitle: string
let updated: any

beforeEach(() => {
	customer1 =  {
		name: 'Vika',
		budget: 200,
		purchases: [{title:'Picture', cost: 50}],
		cupons: ['OZ','Green','Vitalyur'],
		remainingMoney: 150
	}
	newPurchase = {title: 'Dish', cost: 10}
	newCost = 30
	product = 'Picture'
	oldCupon = 'Green'
	newCupon = 'ProStore'
	requiredCupon = 'OZ'

	education = {
		'Andrey': [
			{id: 1, title: 'SGGHT'},
			{id: 2, title: 'SPMI'}
		],
		'Vika': [
			{id: 1, title: 'BGPU'}
		]
	}
	student = 'Andrey'
	oldUniversityTitle = 'SGGHT'
	newUniversityTitle = 'Soligorsk College'
})

test('decrease budget', () => {
	upgraded = decreaseBudget(customer1,newPurchase)
	
	expect(upgraded.remainingMoney).toBe(140)
})

test('add product', () => {
	upgraded = pushProduct(customer1,newPurchase)
	
	expect(upgraded.purchases.length).toBe(2)
})

test('change customer data', () => {
	upgraded = changeCustomer(customer1,newPurchase)
	
	expect(upgraded.purchases.length).toBe(2)
	expect(upgraded.remainingMoney).toBe(140)
	expect(upgraded).not.toBe(customer1)
})

test('change cupon', () => {
	upgraded = changeCupon(customer1,oldCupon,newCupon)
	
	expect(upgraded.cupons[1]).toBe('ProStore')
	expect(upgraded).not.toBe(customer1)
	expect(upgraded.cupons).not.toBe(customer1.cupons)
})

test('change product cost', () => {
	upgraded = changeCostOfProduct(customer1,product,newCost)
	
	expect(upgraded.purchases[0].cost).toBe(30)
	expect(upgraded.purchases[0].cost).not.toBe(customer1.purchases[0].cost)
	expect(upgraded.purchases[0]).not.toBe(customer1.purchases[0])
})

test('remove cupon', () => {
	upgraded = removeCupon(customer1,requiredCupon)
	
	expect(upgraded.cupons.length).toBe(2)
	expect(upgraded).not.toBe(customer1)
	expect(upgraded.cupons).not.toBe(customer1.cupons)
})

test('change university name', () => {
	updated = updateUniversity(education,student,oldUniversityTitle,newUniversityTitle)
	
	expect(updated[student][0].title).toBe('Soligorsk College')
	expect(updated[student]).not.toBe(education[student])
	expect(updated['Vika']).toBe(education['Vika'])
})