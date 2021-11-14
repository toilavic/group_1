import { createContext, ReactNode, useEffect, useState } from "react";
import interfaceStore from "../data/stores/interfaceStore";
import store from "../data/stores/stores";
import users from "../data/users/users"
import axios from "axios";
import IStores from "../data/stores/IStores"

interface StoreContextProps{
    children: ReactNode
}

export interface StoresContextDefault{
    stores: interfaceStore[],
    Login: (email: string, password: string) => void,
    Logout: () => void,
    auth: Boolean,
    username: string,
    test: IStores[]
}

const storesContextDataDefault = {
    stores: [],
    Login: () => {},
    Logout: () => {},
    auth: false,
    username: '',
    test: [],
}



export const StoresContext = createContext<StoresContextDefault>(
    storesContextDataDefault
);

const StoresContextProvider = ({children} : StoreContextProps) => {
    const [stores, setStores] = useState<interfaceStore[]>(storesContextDataDefault.stores);
    const [username, setUsername] = useState(storesContextDataDefault.username);
    const [auth, setAuth] = useState(storesContextDataDefault.auth);
    const [test, setTest] = useState<IStores[]>(storesContextDataDefault.test);
    //let tam:any = null;

    useEffect(() => {
        setStores(store);
        setAuth(false);
        setUsername('');
        getAllStores();
        // tam = test;
    }, [])
    //console.log(stores);

    const getAllStores = () => {
        axios.get(`http://localhost:4000/items`)
        .then((response) => {
            // console.log(response.data);
            setTest(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

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
    };

    const Logout = () => {
        setAuth(false);
        setUsername('');
    }
    //console.log(username);
    // console.log();
    
    

    const StoresContextData = {
        stores,
        Login,
        Logout,
        auth,
        username,
        test
    }

    return (
        <StoresContext.Provider value={ StoresContextData }>
            {children}
        </StoresContext.Provider>
    )
}

export default StoresContextProvider