import { createContext, ReactNode, useEffect, useState } from "react";
import interfaceStore from "../data/stores/interfaceStore";
import store from "../data/stores/stores";

interface StoreContextProps{
    children: ReactNode
}

export interface StoresContextDefault{
    stores: interfaceStore[],
}

const storesContextDataDefault = {
    stores: []
}

export const StoresContext = createContext<StoresContextDefault>(
    storesContextDataDefault
);

const StoresContextProvider = ({children} : StoreContextProps) => {
    const [stores, setStores] = useState<interfaceStore[]>(storesContextDataDefault.stores);

    useEffect(() => {
        setStores(store)
    }, [])

    const StoresContextData = {
        stores,
    }

    return (
        <StoresContext.Provider value={ StoresContextData }>
            {children}
        </StoresContext.Provider>
    )
}

export default StoresContextProvider