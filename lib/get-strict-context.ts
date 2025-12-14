import { createContext, useContext } from 'react'

export function getStrictContext<T>(name: string) {
	const Context = createContext<T | null>(null)

	function useStrictContext() {
		const ctx = useContext(Context)
		if (!ctx) {
			throw new Error(`${name} must be used inside ${name}.Provider`)
		}
		return ctx
	}

	return [Context, useStrictContext] as const
}
