export type Product = {
	title: string
	cost: number
}

export type Customer = {
	name: string
	budget: number
	purchases: Product[]
	cupons: string[]
	remainingMoney: number
}

export type UniversityType = {
	id: number
	title: string
}

export type EducationType = {
	[name: string]: UniversityType[] 
}

export const decreaseBudget = (customer: Customer, product: Product) => ({
	...customer,
	remainingMoney: customer.remainingMoney - product.cost
})

export const pushProduct = (customer: Customer, product: Product) => ({
	...customer,
	purchases: [...customer.purchases,product]
})

export const changeCupon = (customer: Customer, requiredCupon: string, newCupon: string) => ({
	...customer,
	cupons: customer.cupons.map(v => 
		v === requiredCupon ? newCupon : v
	)
})
		
export const changeCustomer = (customer: Customer, product: Product) => ({
	...customer,
	purchases: [...customer.purchases,product],
	remainingMoney: customer.remainingMoney - product.cost
})

export const changeCostOfProduct = (customer: Customer, requiredTitleOfProduct: string, newCost: number) => ({
	...customer,
	purchases: customer.purchases.map(c => 
		c.title === requiredTitleOfProduct 
			? {...c, cost: newCost} 
			: c
	)
})

export const removeCupon = (customer: Customer, requiredCupon: string) => ({
	...customer,
	cupons: customer.cupons.filter(v => 
		v !== requiredCupon
	)
})

export const updateUniversity = (education: EducationType, student: string, oldTitle: string, newTitle: string) => ({
	...education,
	[student]: education[student].map(st => 
		st.title === oldTitle ? {...st,title: newTitle} : st
	)
})
