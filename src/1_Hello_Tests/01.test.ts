import { multiply, splitByWords, sum } from './01'

// data
let a: number
let b: number
let c: number

let phrase1: string 
let phrase2: string 
let phrase3: string 

beforeEach(() => {
	a = 1
	b = 2
	c = 3

	phrase1 = 'Hello, World!'
	phrase2 = 'Hey, Bro! How are you?'
	phrase3 = 'Test is cool technology!'
})

test('sum should be correct', () => {
	// action
	const result1 = sum(a,b)
	const result2 = sum(b,c)

	//expect result
	expect(result1).toBe(3)
	expect(result2).toBe(5)
})

test('multiply should be correct', () => {
	const result1 = multiply(a,b)
	const result2 = multiply(b,c)
	const result3 = multiply(a,c)

	expect(result1).toBe(2)
	expect(result2).toBe(6)
	expect(result3).toBe(3)
})

test('array of strings should be correct', () => {
	const result1 = splitByWords(phrase1)
	const result2 = splitByWords(phrase2)
	const result3 = splitByWords(phrase3)
	
	expect(result1).toStrictEqual(['hello','world'])
	expect(result2).toStrictEqual(['hey','bro','how','are','you'])
	expect(result3).toStrictEqual(['test','is','cool','technology'])
})