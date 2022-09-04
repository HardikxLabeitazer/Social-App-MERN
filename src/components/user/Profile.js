import React, { useEffect, useState } from 'react'
import NavBar from './NavBar.'
import { UseOwnerAuth } from '../auth/Userauth'
import { read } from './userapi';
import auth from '../auth/authhelper';
import { useNavigate } from 'react-router';
const Profile = () => {
    const navigate = useNavigate()
    const [values,setValues] = useState([])
    
    useEffect(()=>{
      
        read({userId:auth.isAuthenticated()?.user?._id},{t:auth.isAuthenticated().token}).then((data)=>{
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
                        <button onClick={()=>navigate('/')}>Edit Profile</button>
                        <hr/>
                        <p>Joined On: {values?.created}</p>
                    </div>
                </div>
            </NavBar>

        </>
    )
}

export default Profile