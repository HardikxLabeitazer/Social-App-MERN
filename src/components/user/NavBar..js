import React from 'react'
import { signout } from '../auth/authapi'
import auth from '../auth/authhelper'
import { useNavigate } from 'react-router'
import { UseOwnerAuth } from '../auth/Userauth'
const NavBar = ({ children }) => {
    const navigate = useNavigate()
    const { logout } = UseOwnerAuth();
    return (<>


        <div style={{width:'100%'}}>
            <div style={{ position: 'fixed', backgroundColor: 'white', marginTop: '0px', marginLeft: '0px', marginRight: '0px', zIndex: '20', height: '25px', width: '100vw' }}>
                <div style={{ boxShadow: '2px 1px 1px gray', width: '100vw', display: 'flex', justifyContent: 'space-between' }} >
                    <p >
                        SocialApp
                    </p>
                    {auth.isAuthenticated() && <button onClick={logout} style={{ padding: '3px', border: '1px solid black', margin: '10px' }}>
                        Signout
                    </button>}

                </div>

            </div>
            <div style={{paddingTop:'55px'}}>
                {children}
            </div>
        </div>


    </>
    )
}

export default NavBar