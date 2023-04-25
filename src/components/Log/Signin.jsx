import { Link } from "react-router-dom"

const Signin = () => {

  const handleSigninForm = () => {

  }

    return (
      <div className="login-conpainer">
        <h1>Enter to ToDo</h1>
        <form onSubmit={handleSigninForm}>
          <input placeholder="Enter your email"/> 
          <input placeholder="Enter your password"/>
          <button type="submit">Log in</button>
        </form>
        <p>If you still are not  registred, please <Link to="/signin">Sing up</Link></p>
  
      </div>
    )
}

export default Signin