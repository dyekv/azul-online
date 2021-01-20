import { create } from 'domain'
import {createContext,useContext} from 'react'

const createCtx = <ContextType>() => {
    const ctx = createContext<ContextType | undefined>(undefined)
    const useCtx = () => {
        const c = useContext(ctx)
        if(!c)throw new Error('useCtx must be inside a Provider with a value')
        return c
    }
    return [useCtx,ctx.Provider] as const
} 
export default createCtx