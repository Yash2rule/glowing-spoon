import React,{useState,useEffect} from 'react'
import axios from 'axios';

const LoginScreen = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo,setUserInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) : null;
        if(userInfo){
            history.push('/profile')
        }
    },[userInfo,history])

    const submitHandler = async (e) => {
            e.preventDefault();
            try {
                const userData = await axios.post('/api/users/login',{email, password},{
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                setUserInfo(userData.data);
                localStorage.setItem('userInfo', JSON.stringify(userData.data));
            } catch (error) {
                setError(error)
            }
    }
    return (
        <>
        <form onSubmit={submitHandler} style={{width:'50%',border: '1px solid black',margin: 'auto',padding: '10px'}}>
        <label htmlFor="email">Email: </label><br/>
        <input type="text" id="email" name="email" value={email} 
        placeholder="Enter your email" 
        onChange={(e) => setEmail(e.target.value)}/><br/><br/>
        <label htmlFor="password">Password: </label><br/>
        <input type="text" id="password" name="password" value={password} 
        placeholder="Enter your password" 
        onChange={(e) => setPassword(e.target.value)}/><br/><br/>
        <input type="submit" value="Login"/>
        {error ? <h3 style={{color: 'red'}}>Error!</h3> : null}
        </form> 
        <a href="/"><h3>Home</h3></a>
        </>
    )
}

export default LoginScreen
