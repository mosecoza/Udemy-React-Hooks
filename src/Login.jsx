import React, { useState } from 'react'


const INITIAL_LOGINS = {username:"", password:""}

function Login(){
    let [{username, password}, setLoginDetails] = useState(INITIAL_LOGINS);
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.currentTarget)
    }

    function handleInputChange(event) {
        event.preventDefault();
        setLoginDetails({[event.currentTarget.id]:event.currentTarget.value});
    }

    return <div
        style={{textAlign: 'center'}}
    >
    <h2>Login</h2>
    <form 
    style={{display:'grid', alignItems: 'center', justifyContent:'center'}}
    action="" onSubmit={handleSubmit}>
        <input type="email" name="" id="email" onChange={event=>handleInputChange(event)} value={username} placeholder="Username"/>
        <input type="password" name="" onChange={event=>handleInputChange(event)} id="password" value={password} placeholder="Password"/>
        <button type="submit">Submit</button>
    </form>
    </div>
}

export default Login;