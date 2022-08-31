import React,{useState,useEffect} from 'react'
import { list } from './userapi';

const Users = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        list().then((data)=>{
            if(data && data.error){
                console.log(data.error)
            }else{
                console.log('data',data);
                setUsers(data)
            }
        })
    },[])

  return (
    <div>
        Users

    </div>
  )
}

export default Users