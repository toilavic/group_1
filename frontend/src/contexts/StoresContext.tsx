import { createContext, ReactNode, useEffect, useState }        from "react";

import IStores                                                  from "./IStores";

import APIGetAllStores                                          from "../api/APIGetAllStores";
import APILogin                                                 from "../api/APILogin";
interface StoreContextProps {
    children: ReactNode
}
export interface StoresContextDefault {
    stores: IStores[],
    auth: Boolean,
    Login: (email: String, password: String) => void,
    Logout: () => void,
    getRateColor: (rate: Number) => any,
    getAvgRate: (Number: Array<number>) => Number,
    getDeductedPrice: (price: number, discount: number) => number,
    // handleSort: () => void
}

const storesContextDataDefault = {
    stores: [],
    auth: false,
    Login: () => { },
    Logout: () => { },
    getRateColor: () => '',
    getAvgRate: () => 0,
    getDeductedPrice: () => 0,
    // handleSort: () => {}
}

export const StoresContext = createContext<StoresContextDefault>(
    storesContextDataDefault
);

const StoresContextProvider = ({ children }: StoreContextProps) => {
    const [stores, setStores] = useState<IStores[]>(storesContextDataDefault.stores);
    const [auth, setAuth] = useState(storesContextDataDefault.auth);
    // const [sortText, setSortText] = useState("");

    useEffect(() => {
        APIGetAllStores()
        .then((res: any) => {
            console.log(res)
            if (res) {
                if (res.status === 200) setStores(res.data)
            } 
        })
    }, [])

    const Login = (username: String, password: String) => {
        APILogin(username, password)
            .then(response => {
                if(!response) alert('Something went wrong !')
                else console.log(response)
                const _token = response
                const _username = response.user.username
                console.log(_username);
                if (_token) {
                    localStorage.setItem("token", _token)
                    localStorage.setItem("username", _username )
                    setAuth(true)
                }
            })
    };

    const Logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setAuth(false);
    }

    function getRateColor (rate: Number) {
        if (rate >= 4) return 'green'
        else if (rate >= 2.5 && rate < 4 || rate === 0) return 'orange'
        else return 'red'
    }

    const getAvgRate = (arrRate: Array<number>) => {
        if (arrRate.length) return Math.round((arrRate.reduce((prev: number, curr: number) => prev + curr) / arrRate.length)* 10) / 10 ;
        else return 0;
    } 
    const getDeductedPrice = (price: number, discount: number) => Math.round((price*(100-discount)/100)*1)/1;

    // const handleSort = (event) => {
    //     setSortText(event.target.value)
    // }

    const StoresContextData = {
        stores,
        auth,
        Login,
        Logout,
        getRateColor,
        getAvgRate,
        getDeductedPrice,
    }

    return (
        <StoresContext.Provider value={StoresContextData}>
            {children}
        </StoresContext.Provider>
    )
}

export default StoresContextProvider