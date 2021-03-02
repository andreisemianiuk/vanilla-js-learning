export type FriendsType = {
	[key: string]: {id: number, name: string}	
}

const friends: FriendsType = {
	'1': {id: 1, name: 'Andrey'},
	'22': {id: 1, name: 'Vika'},
	'333': {id: 333, name: 'Kolya'},
	'4444': {id: 4444, name: 'Vasya'}
}

let friend = {id: 100500, name: 'Inkognito'}
friends[friend.id] = friend
delete friends[friend.id]


