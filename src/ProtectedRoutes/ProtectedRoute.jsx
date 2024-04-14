import PropTypes from "prop-types"
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate } from "react-router-dom"
const ProtectedRoute = ({children}) => {
          const {user, loadingState} = useContext(AuthContext);

          if (loadingState) {
                    return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
          }

          if (user) {
                    return children
          }

          return <Navigate to={"/login"}></Navigate>
}

ProtectedRoute.propTypes = {
          children: PropTypes.node.isRequired
}

export default ProtectedRoute