import React from 'react'
import { Component } from 'react'
import { Navigate,Route } from 'react-router'
import auth from './authhelper'
const ProtectedRoutes = ({children}) => {

    const authenticated = auth.isAuthenticated();
    console.log('what',authenticated)
    if(authenticated){
        return children
    }else{
       return <Navigate to={"/signin"} replace/>
    }
  
}

export default ProtectedRoutes