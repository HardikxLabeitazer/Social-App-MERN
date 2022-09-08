import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import auth from '../auth/authhelper';
import NavBar from './NavBar.';
import { findPeople, follow, list } from './userapi';

const Users = () => {

    const jwt = auth.isAuthenticated()
    const [users, setUsers] = useState([]);

    useEffect(() => {
        findPeople({userId:jwt?.user?._id},{t:jwt?.token}).then((data)=>{
            if(data && data.error){
                console.log(data.error)
            }else{
                console.log('userdata',data)
                setUsers(data)
            }
        })
    }, [])

    const clickFollow = (user,i)=>{
        follow({userId:jwt.user?._id},{t:jwt.token},user?._id).then((data)=>{
            if(data.error){
                console.log(data.error)
            }else{
                let toFollow = users;
                toFollow.splice(i,1);
                setUsers(toFollow)
            }
        })
    }

    return (
        <NavBar>
            <section style={{display:'flex',justifyContent:'center'}}>
                <div style={{ width: '50%', padding: '10px', border: '1px solid gray' }}>
                    {
                        users?.map((data,i)=>{
                            return (
                               <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'5px'}}> <Link  to={"/profile?id="+data._id} style={{textDecoration:'none'}} ><p>{data.name}</p></Link><button onClick={()=>clickFollow} hidden={auth.isAuthenticated().user._id === data._id} style={{margin:'10px'}}>Follow</button></div>

                            )
                        })
                    }
                </div>
            </section>
        </NavBar>
    )
}

export default Users