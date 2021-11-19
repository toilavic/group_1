import { createContext, ReactNode, useEffect, useState } from "react";
import users from "../data/users/users"
import IStores from "../data/stores/IStores";
import GetAllStores from "../api/GetAllStores";
import PostRegister from "../api/PostRegister";

interface StoreContextProps{
    children: ReactNode
}

export interface StoresContextDefault{
    stores: IStores[],
    Register: (username: string, name: string, passwordHash: string) => void,
    Login: (email: string, password: string) => void,
    Logout: () => void,
    auth: Boolean,
    username: string,
}

const storesContextDataDefault = {
    stores: [],
    Register: () => {},
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

    const Register = (username: string, name: string, passwordHash: string) => {
        PostRegister(username,name,passwordHash)
    }

    const Login = (email: string, password: string) => {
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
    
    

    const StoresContextData = {
        stores,
        Register,
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