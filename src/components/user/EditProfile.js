import React, { useEffect, useState } from 'react'
import auth from '../auth/authhelper';
import { UseOwnerAuth } from '../auth/Userauth';
import NavBar from './NavBar.';
import { update } from './userapi';
import { useNavigate } from 'react-router';
const EditProfile = () => {

  const navigate = useNavigate()
  const { userdata, currentUser } = UseOwnerAuth();
  const [user,setUser] = useState({
    email: '',
    password: '',
    name: ''
  });
  useEffect(() => {

    async function setdata() {
      userdata()
    }
    setdata()
  }, [])

  // const handleChange = name=>event=>{
  //   setUser({...user,[name]:event.target.value})
  // }
  const handleChange = name => event => {

        
    setUser({ ...user, [name]: event.target.value })

}
  const clickSubmit=async ()=>{
     const userinfo = {
       name :user?.name,
       email:user?.email || undefined,
       password:user?.password || undefined
     }

     update({userId:currentUser?._id},{t:auth.isAuthenticated().token},userinfo).then((data)=>{

        if(data && data.error){
          console.log("could not update")
        }else{
          console.log('updated')
          navigate('/')
        }
     })

  }

  return (
    <NavBar>
      <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '50%', border: '1px solid gray', padding: '20px' }}>
          <div><input type="text"  defaultValue={currentUser?.name || ""} onChange={handleChange('name')} /></div>
          <div><input type="email"  onChange={handleChange('email')} defaultValue={currentUser?.email || ""} /></div>
          <div><input type="password"  placeholder='password' onChange={handleChange('password')}  /></div>
          <div><button onClick={clickSubmit}>Update</button></div>
        </div>
      </div>
    </NavBar>
  )
}

export default EditProfile