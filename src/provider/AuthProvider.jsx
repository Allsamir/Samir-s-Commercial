import { createContext, useEffect, useState} from "react"
import { auth } from "../config/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import PropTypes from "prop-types"

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
          const [user, setUser] = useState(null);

          const createUser = (email, password) => {
                   return createUserWithEmailAndPassword(auth, email, password)
          } 

          const logOut = () => {
                   return signOut(auth)
          }

          const authInfo = {
                    createUser,
                    user,
                    logOut
          }

          useEffect(() => {
                    onAuthStateChanged(auth, (user) => {
                              setUser(user)
                    })
          }, [])


  return (
    <AuthContext.Provider value={authInfo}>
          {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
          children: PropTypes.node.isRequired
}

export {AuthProvider, AuthContext}