import { FriendsType } from './07'

let friends: FriendsType

beforeEach(() => {
	friends = {
		'1': {id: 1, name: 'Andrey'},
		'22': {id: 1, name: 'Vika'},
		'333': {id: 333, name: 'Kolya'},
		'4444': {id: 4444, name: 'Vasya'}
	}
})

test('update corresponding friends', () => {
	friends['22'].name = 'Vikulya'
	expect(friends['22'].name).toBe('Vikulya')
})

test('delete corresponding friends', () => {
	delete friends['333']
	expect(friends['33']).toBeUndefined()
})