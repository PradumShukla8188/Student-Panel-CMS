"use client"
import React from 'react'

import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient=new QueryClient({
    defaultOptions:{
        mutations:{
            retry:false
        },
        queries:{
            retry:false
        }
    }
})

export default function ReactQueryWrapper(props:{children:React.ReactNode}){
    return(
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    )
}

