import React,{createContext,useContext,useEffect,useState} from 'react'
import auth from './authhelper'
import { useNavigate } from 'react-router'
import { read } from '../user/userapi'

const UserAuthContext = createContext({})
const Userauth = ({children}) => {

    const {verify,logout} = UseProviderauth();

    useEffect(()=>{
        if(auth.isAuthenticated()===false){
            verify()
        }
        

    },[])
  return (
     <UserAuthContext.Provider value={{verify,logout}}>
        <div>
            {children}
        </div>
     </UserAuthContext.Provider>
  )
}

export default Userauth

export const UseOwnerAuth =()=>{
   return useContext(UserAuthContext)
}

const UseProviderauth=()=>{

   
    const navigate = useNavigate()




  
    const verify= ()=>{

        if(auth.isAuthenticated()!==false){
         
            navigate('/')
        }else{
            navigate('/signin')
        }

    }

    const logout = ()=>{
       
        auth.clearJWT(()=>{
          
        });
        navigate('/signin')
       
    }

    return {
        verify,logout
    }
}