import React, { useEffect, useState } from 'react'
import NavBar from './NavBar.'
import { UseOwnerAuth } from '../auth/Userauth'
import { read } from './userapi';
import auth from '../auth/authhelper';
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom'

const Profile = ({match}) => {
    const navigate = useNavigate()
    const [values,setValues] = useState([])
    const urlParams =new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    
    useEffect(()=>{
        
      
        read({userId:id},{t:auth.isAuthenticated().token}).then((data)=>{
            if(data && data.error){
                console.log("user not found")
            }else{
                setValues(data)
            }
        })
       

    },[])
    return (
        <>
            <NavBar>
                <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'50%',border:'1px solid gray',padding:'20px'}}>
                        <p>Name: {values?.name}</p>
                        <p>Email: {values?.email}</p> 
                        <p>{values?.about ? values.about :''}</p>
                        <p>{values?.mobile ? values.mobile :''}</p>
                       { auth.isAuthenticated().user._id === id  && <Link to={'/edit/' + values?._id}>Edit</Link>}
                        <hr/>
                       
                        <p>Joined On: {values?.created}</p>
                        
                    </div>
                </div>
            </NavBar>

        </>
    )
}

export default Profile