import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Link } from "react-router-dom"

const Profile = () => {

  const {user} = useContext(AuthContext)
   
  return (
  <div className="hero min-h-screen bg-white text-black my-10">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <img src={user.photoURL} alt={user.displayName} className="rounded-full w-96 mx-auto"/>
      <h1 className="text-5xl font-bold py-8">{user.displayName}</h1>
      <p className="pb-6 text-xl">{user.email}</p>
      <Link to={"/update-profile"}><button className="btn btn-outline text-black">Update Profile</button></Link>
    </div>
  </div>
</div>
  )
}

export default Profile