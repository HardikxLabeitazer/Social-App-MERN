import React from 'react'
import { signout } from '../auth/authapi'
import auth from '../auth/authhelper'
import { useNavigate } from 'react-router'
const NavBar = () => {
    const navigate = useNavigate()
  return (
    <header>
        <div style={{boxShadow:'2px 1px 1px gray',width:'100vw',backgroundColor:'white',height:'50px',display:'flex',justifyContent:'space-between',paddingInline:'3px',position:'fixed',zIndex:'10px'}} >
            <p >
                SocialApp
            </p>
            <button onClick={()=>auth.clearJWT(() => navigate('/signin'))} style={{padding:'3px',border:'1px solid black',margin:'10px'}}>
                Signout
            </button>
        </div>

    </header>
  )
}

export default NavBar