import { TechType } from '../2_Objects/02'

export const addNewTech = (t: TechType[], newTech: string) => {
	const newTechnology: TechType = {
		id: new Date().getTime(),
		title: newTech
	}
	t.push(newTechnology)
}