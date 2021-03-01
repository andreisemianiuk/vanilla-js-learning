import { student } from './02'

test('title should be Zhynovicha', () => {
	expect(student.address.street.title).toBe('Zhynovicha')
})

test('technologies length should be 3', () => {
	expect(student.technologies.length).toBe(3)
})