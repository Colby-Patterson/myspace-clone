import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Register = () => {
  const {register} = useContext(AuthContext)
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('2345789')
  const [passwordConfirmation, setPasswordConfirmation] = useState('2345789')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(password.length < 6) {
      alert('Password must be at least six characters or longer')
      return
    }
    if(password !== passwordConfirmation) {
      alert('Passwords do not match')
      return
    }
    register({email, password})
  }

  return (
    <>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input required autoFocus value={email} onChange={(e)=> setEmail(e.target.value)} />
        <label>Password:</label>
        <input required autoFocus value={password} onChange={(e)=> setPassword(e.target.value)} />
        <label>Confirm Password:</label>
        <input required autoFocus value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)} />
        <button type="submit">Create Account</button>
      </form>
    </>
  )
}

export default Register