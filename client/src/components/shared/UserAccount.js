import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import User from "./User";

const UserAccount = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [fakeUsers, setFakeUsers] = useState([])

  useEffect(()=>{
    getFakeUsers()
  }, [])

  const getFakeUsers = async () => {
    try {
      let res = await axios.get('/api/fake_users')
      setFakeUsers(res.data)
    } catch(err) {
      alert('Error occurred with getFakeUsers')
      console.log(err)
    }
  }

  const renderFakeUsers = () => {
    return (
        fakeUsers.map(f=> <User key={f.id} {...f} />)
    )
  }

  return (
    <div>
      <h1>Account Settings</h1>
      <p>Hello {user.email}</p>
      {renderFakeUsers()}
    </div>
  )
}

export default UserAccount