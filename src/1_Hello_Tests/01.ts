export const sum = (a: number, b: number): number => {
	return a + b
}

export const multiply = (a: number, b: number): number => {
	return a * b
}

export const splitByWords = (str: string):Array<string> => {
	return str.replace(/[^\w\s]/g,'').toLowerCase().split(' ')
}