import { Password } from "@mui/icons-material";
import { createContext, ReactNode, useEffect, useState } from "react";
import interfaceStore from "../data/stores/interfaceStore";
import store from "../data/stores/stores";
import users from "../data/users/users"

interface StoreContextProps{
    children: ReactNode
}

export interface StoresContextDefault{
    stores: interfaceStore[],
    Login: (email: string, password: string) => void,
    auth: Boolean,
    username: string
}

const storesContextDataDefault = {
    stores: [],
    Login: () => {},
    auth: false,
    username: ''
}

export const StoresContext = createContext<StoresContextDefault>(
    storesContextDataDefault
);

const StoresContextProvider = ({children} : StoreContextProps) => {
    const [stores, setStores] = useState<interfaceStore[]>(storesContextDataDefault.stores);
    const [username, setUsername] = useState(storesContextDataDefault.username);
    const [auth, setAuth] = useState(storesContextDataDefault.auth);

    useEffect(() => {
        setStores(store);
        setAuth(false);
        setUsername('');
    }, [])
    console.log(stores);

    const Login = (email: string, password: string) => {
        //console.log(email, password);
        let UserFind = users.find(user => user.email === email);
        if (UserFind) {
            let PasswordFind = UserFind.password === password;
            if (PasswordFind) {
                setUsername(email);
                setAuth(true);
                console.log("login successful!");
            } else {
                console.log("password is not matched!");
            }
        } else {
            console.log("Email is not exist");
        }
    }
    

    const StoresContextData = {
        stores,
        Login,
        auth,
        username
    }

    return (
        <StoresContext.Provider value={ StoresContextData }>
            {children}
        </StoresContext.Provider>
    )
}

export default StoresContextProvider