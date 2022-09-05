import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import auth from '../auth/authhelper';
import NavBar from './NavBar.';
import { list } from './userapi';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        list().then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                console.log('data', data);
                setUsers(data)
            }
        })
    }, [])

    return (
        <NavBar>
            <section style={{display:'flex',justifyContent:'center'}}>
                <div style={{ width: '50%', padding: '10px', border: '1px solid gray' }}>
                    {
                        users?.map((data,i)=>{
                            return (
                               <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'5px'}}> <Link  to={"/profile?id="+data._id} style={{textDecoration:'none'}} ><p>{data.name}</p></Link><button hidden={auth.isAuthenticated().user._id === data._id} style={{margin:'10px'}}>Follow</button></div>

                            )
                        })
                    }
                </div>
            </section>
        </NavBar>
    )
}

export default Users