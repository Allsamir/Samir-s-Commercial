import { createContext} from "react"
import { auth } from "../config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types"

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


          const createUser = (email, password) => {
                   return createUserWithEmailAndPassword(auth, email, password)
          } 

          const authInfo = {
                    createUser
          }


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