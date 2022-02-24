import { useState } from "react"
const Contact =()=>{

    const [state,setState] = useState({
        email:"",
        password:""
    })

    const changeHandler=(event)=>{
        let newState= state
        newState[event.target.name]=event.target.value
        setState({
            ...newState
        })

    }

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(state);
    }
    return <div className="contact">
                <h1 className="heading__primary">Contact</h1>   
                <div className="contact__box">
                    <form onSubmit={submitHandler} className="form form-signin">
                        <label htmlFor="email">email</label>
                        <input id="contact__input" placeholder="Enter Admin's email" onChange={(event)=>{changeHandler(event)}} type="text" id="email" name="email" vlaue={state.email}/>
                        <label htmlFor="password">password</label>
                        <input id="contact__input" placeholder="Enter Admin's password" onChange={(event)=>{changeHandler(event)}} type="password" id="password" name="password"  vlaue={state.password}/>
                        <button type="submit" className="contact__form_btn">sign in</button>
                    </form>
                </div>
           </div>
}

export default Contact