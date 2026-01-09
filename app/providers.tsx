'use client'

import { makeStore } from '@/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function Providers({ children }: { children: React.ReactNode }) {
	// useRef-ni boshlang'ich qiymat bilan berish
	const storeRef = useRef<ReturnType<typeof makeStore> | null>(null)

	if (!storeRef.current) {
		storeRef.current = makeStore()
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
