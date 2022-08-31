import React,{useState,useEffect} from 'react'
import { signin } from '../auth/authapi'
import './user.css'
import auth from '../auth/authhelper'
import { Link } from 'react-router-dom'

const Login = () => {

    const [user,setUser] = useState({
        email:'',
        password:''
    })
    const handleChange = name =>event=> {
        setUser({...user,[name]:event.target.value})
    }

    const handleSubmit=()=>{
        console.log(user)
        const userdata = {
            email:user.email || undefined,
            password:user.password || undefined
        }

        signin(userdata).then((data)=>{
            if(data.error){
                console.log(data.error)
            }else{
                auth.authenticate(data,()=>{
                    console.log('logged in')
                })
            }
        })
    }
    return (
        <div className='container'>
            <div className='loginbox'>
                <div>
                    <input type="email" onChange={handleChange('email')} placeholder="Email" />
                    <input onChange={handleChange('password')} type="password" placeholder='Password' />
                    <button onClick={handleSubmit}>Submit</button>
                    <div>Don't have an account <Link to="/signup">Sign Up</Link></div>
                </div>

            </div>
        </div>
    )
}

export default Login