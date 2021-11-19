import { createContext, ReactNode, useEffect, useState } from "react";
import IStores from "../data/stores/IStores";
import GetAllStores from "../api/GetAllStores";
import PostLogin from "../api/PostLogin";

interface StoreContextProps{
    children: ReactNode
}

export interface StoresContextDefault{
    stores: IStores[],
    Login: (email: string, password: string) => void,
    Logout: () => void,
    auth: Boolean,
    username: string,
}

const storesContextDataDefault = {
    stores: [],
    Login: () => {},
    Logout: () => {},
    auth: false,
    username: '',
}



export const StoresContext = createContext<StoresContextDefault>(
    storesContextDataDefault
);

const StoresContextProvider = ({children} : StoreContextProps) => {
    const [stores, setStores] = useState<IStores[]>(storesContextDataDefault.stores);
    const [username, setUsername] = useState(storesContextDataDefault.username);
    const [auth, setAuth] = useState(storesContextDataDefault.auth);

    useEffect(() => {
        setAuth(false);
        setUsername('');
        getAllStores();
    }, [])

    const getAllStores = () => {
        GetAllStores()
        .then((response) => {
            setStores(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const Login = (username: string, password: string) => {
        PostLogin(username,password)
        .then(response => {
            if(response) {
                localStorage.setItem("token", response)
                console.log(localStorage.getItem("token"));
                if(localStorage.getItem("token")) {
                    setAuth(true)
                }
            }
        })
        .catch((error) => console.log(error)
        )
    };

    const Logout = () => {
        localStorage.removeItem("token");
        setAuth(false);
    }

    const StoresContextData = {
        stores,
        Login,
        Logout,
        auth,
        username,
    }

    return (
        <StoresContext.Provider value={ StoresContextData }>
            {children}
        </StoresContext.Provider>
    )
}

export default StoresContextProvider