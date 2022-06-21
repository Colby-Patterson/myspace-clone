import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const FetchUser = (props) => {
  const {user, setUser} = useContext(AuthContext)
  const [loaded, setLoaded] = useState(false)
  useEffect(()=> {
    checkUser()
  }, [])
  const checkUser = async () => {
    if(user || !localStorage.getItem('access-token')) {
      setLoaded(true)
    }
    else {
      try {
        let res = await axios.get('/api/auth/validate_token')
        setUser(res.data.data)
        setLoaded(true)
      } catch(err) {
        console.log(err)
        setLoaded(false)
      }
    }
  }
  return loaded ? props.children : null  
}

export default FetchUser