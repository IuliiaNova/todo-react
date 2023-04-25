import { Link } from "react-router-dom"

const Signup = () => {

  const handleSignupForm = () =>{}

  return (
    <div className="login-conpainer">
      <h1>Welcome to ToDo</h1>
      <form onSubmit={handleSignupForm}>
        <input placeholder="Enter your name"/> 
        <input placeholder="Enter your email"/>
        <input placeholder="Enter your password"/>
        <button type="submit">Sing up</button>
      </form>
      
      <p>If you already registred, please <Link to="/signin">Sing in</Link></p>

    </div>
    
  )
}

export default Signup