import { useState } from "react"
import logo from "../../assets/images/logo.png"

const Signin=(props)=>{

    const [state,setState] = useState({
        username:"",
        secret:""
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
        if(state.username==="admin" && state.secret==="adminsecret"){
            props.authHandler()
        }
        // else{

        // }
    }

    return (
        <div className="signin">
              <div>
                  <img src={logo} alt="am logo"/>
              </div>
              <form onSubmit={submitHandler} className="form form-signin">
                  <label htmlFor="username">Username</label>
                  <input placeholder="Enter Admin's Username" onChange={(event)=>{changeHandler(event)}} type="text" id="username" name="username" vlaue={state.username}/>
                  <label htmlFor="secret">Secret</label>
                  <input placeholder="Enter Admin's Secret" onChange={(event)=>{changeHandler(event)}} type="password" id="secret" name="secret"  vlaue={state.secret}/>
                  <button type="submit" className="btn btn-white">sign in</button>
              </form>
        </div>
    )
}

export default Signin