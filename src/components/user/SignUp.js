import React,{useState,useEffect} from 'react'
import { signin } from '../auth/authapi'
import './user.css'
import auth from '../auth/authhelper'
import { create } from './userapi'

const SignUp = () => {

    const [user,setUser] = useState({
        name:'',
        email:'',
        password:''
    })
    const handleChange = name =>event=> {
        setUser({...user,[name]:event.target.value})
    }

    const handleSubmit=()=>{
        console.log(user)
        const userdata = {
            name:user.name || undefined,
            email:user.email || undefined,
            password:user.password || undefined
        }

        create(userdata).then((data)=>{
            if(data && data.error){
                console.log('user not created ')
            }else{
                console.log('user created')
            }
        })

        
    }
    return (
        <div className='container'>
            <div className='loginbox'>
                <div>
                <input type="text" onChange={handleChange('name')} placeholder="Name" />
                    <input type="email" onChange={handleChange('email')} placeholder="Email" />
                    <input onChange={handleChange('password')} type="password" placeholder='Password' />
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default SignUp