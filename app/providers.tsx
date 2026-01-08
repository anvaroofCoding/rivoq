'use client'

import { makeStore } from '@/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function Providers({ children }: { children: React.ReactNode }) {
	const storeRef = useRef<any>()

	if (!storeRef.current) {
		storeRef.current = makeStore()
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
