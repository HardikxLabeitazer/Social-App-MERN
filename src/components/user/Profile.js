import React, { useEffect, useState } from 'react'
import NavBar from './NavBar.'
import { UseOwnerAuth } from '../auth/Userauth'
import { follow, read, unfollow } from './userapi';
import auth from '../auth/authhelper';
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom'

const Profile = ({match}) => {
    const navigate = useNavigate()
    const [values,setValues] = useState([])
    const urlParams =new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    const jwt = auth.isAuthenticated()
    useEffect(()=>{
        
      console.log('hello')
        read({userId:id?id:auth.isAuthenticated()?.user?._id},{t:auth.isAuthenticated().token}).then((data)=>{
            if(data && data.error){
                console.log("user not found")
            }else{
                let following = checkfollow(data);
                setValues({...data,following:following})
                console.log(values)
            }
        })
       

    },[])

    const checkfollow =(data)=>{

        const match = data?.followers?.some((follower)=> {
            return follower._id !== jwt.user._id
          })
          if(match===undefined){
            return false
          }
          return match 
    }

    const handleFollow = (name)=>{
        if(name==='follow'){
            follow({userId:jwt.user?._id},{t:jwt.token},values?._id).then((data)=>{
                if(data.error){
                    console.log('error')
                }else{
                    setValues({...data,following:!values.following})
                }
               })
        }
       else if(name==='unfollow'){
        unfollow({userId:jwt.user?._id},{t:jwt.token},values?._id).then((data)=>{
            if(data.error){
                console.log('error')
            }else{
                setValues({...data,following:!values.following})
            }
           })
       }
    }

    return (
        <>
            <NavBar>
                <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'50%',border:'1px solid gray',padding:'20px'}}>
                        <p>Name: {values?.name}</p>
                        <p>Email: {values?.email}</p> 
                        <p>{values?.about ? values.about :''}</p>
                        <p>{values?.mobile ? values.mobile :''}</p>
                       { auth.isAuthenticated().user?._id === id  && <Link to={'/edit/' + values?._id}>Edit</Link>}
                       {auth.isAuthenticated().user?._id !== values?._id
                        && <>
                        {
                            values.following!==true?<button onClick={()=>handleFollow('follow')}>Follow</button>:<button onClick={()=>handleFollow('unfollow')}>Unfollow</button>
                        }
                        </>
                       
                       }
                        <hr/>
                       
                        <p>Joined On: {values?.created}</p>
                        
                    </div>
                </div>
            </NavBar>

        </>
    )
}

export default Profile