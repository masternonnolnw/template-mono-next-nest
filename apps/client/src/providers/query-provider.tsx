'use client'

import { tsr } from '../service/api/ts-rest'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export default function QueryProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <QueryClientProvider client={queryClient}>
            <tsr.ReactQueryProvider> {children}</tsr.ReactQueryProvider>
        </QueryClientProvider>
    )
}
