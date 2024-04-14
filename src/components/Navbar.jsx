import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  return (
  <div className="navbar text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black text-white">
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/profile"}>Profile</NavLink></li>
      <li><NavLink to={"/commercial-spaces"}>Commercial Spaces</NavLink></li>
      </ul>
    </div>
    <a className="md:text-2xl text-xl font-bold font-popins">Samir&apos;s Commercial</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/profile"}>Profile</NavLink></li>
      <li><NavLink to={"/commercial-spaces"}>Commercial Spaces</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
   {user && (<div className="w-12 rounded-full mr-2">
          <img alt={user?.displayName || ""} src={user?.photoURL || ""} className="rounded-full cursor-pointer" title={user?.displayName || ""}/>
        </div>)
   }
   {user ? <Link to={"/"} onClick={() => {
    logOut()
    .then(() => {
      console.log("Sucessfully Logout");
      navigate("/login")
    })
   .catch((error) => {
     console.error(error)
   });
   }} className="btn btn-outline text-black text-base">Logout</Link> : <Link to={"/login"} className="btn btn-outline text-black text-base">Login</Link>}
  </div> 
</div>
  )
}

export default Navbar