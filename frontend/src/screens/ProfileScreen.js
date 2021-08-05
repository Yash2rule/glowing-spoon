import React,{useState,useEffect} from 'react'

const ProfileScreen = ({history}) => {
    const [name,setName] = useState('')
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if(userInfo){
            setName(userInfo.name);
        }
    },[])
    return (
        <>
        <h2>Logged in as : <span style={{color: 'red'}}>{name}</span></h2>
        <input type="button" value="Logout" onClick={(e) => {
            localStorage.removeItem('userInfo')
            history.push('/login');
        }}/>
        <a href="/login"><h3>Login</h3></a>
        <a href="/"><h3>Home</h3></a>
        </>
    )
}

export default ProfileScreen
