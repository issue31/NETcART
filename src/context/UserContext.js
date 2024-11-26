import React,{createContext,useState,useEffect} from 'react';
const UserContext = createContext();
const UserProvider = ({children}) => {
    const [user,setUser]= useState(null);
    useEffect(()=>{
        const userData = localStorage.getItem('userData');
        if(userData){
            setUser(JSON.parse(userData));

        }
    },[]);
    const updateUser=(userData)=>{
        setUser(userData);
        localStorage.setItem('userData',JSON.stringify('userData'));
    };
    return(
        <UserContext.Provider value={{user,updateUser}}>
            {children}
        </UserContext.Provider>

    );
};
export {UserContext,UserProvider};