import React, {useState} from 'react'

const INITIAL_RegisterDetails = {
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: ""
}

function Register() {
    const [state, setstate] = useState(INITIAL_RegisterDetails)
    const [user, setUser] = useState();
    function handleInputChange(event){
        setstate({...state,[event.currentTarget.id]:event.currentTarget.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        setUser(state);
        setstate(INITIAL_RegisterDetails);
        console.log(e.currentTarget);
    }

    return (
        <div  style={{display:'flex', alignItems: 'center', justifyContent:'space-between', flexDirection: 'column'}}>
           Register
           <form  style={{display:'flex', alignItems: 'center', justifyContent:'space-around', flexDirection: 'column'}} action="" onSubmit={handleSubmit}>
               <input onChange={e=>handleInputChange(e)} placeholder='firstName' type="text" value={state.firstName} id="firstName"/>
               <input onChange={e=>handleInputChange(e)} placeholder="surname" type="text" value={state.surname} id="surname"/>
               <input onChange={e=>handleInputChange(e)} type="Email Address" placeholder="email" value={state.email} id="email"/>
               <input onChange={e=>handleInputChange(e)} type="password" placeholder="password" value={state.password} id="password"/>
               <input onChange={e=>handleInputChange(e)} type="password" placeholder="confirm Password" value={state.confirmPassword} id="confirmPassword"/>
               <button type="submit">Submit</button>
           </form> 
           <pre>{user? JSON.stringify(user, null, '\n'):null}</pre>
        </div>
    )
}

export default Register;
