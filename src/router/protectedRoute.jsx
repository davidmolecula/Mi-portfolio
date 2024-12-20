import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children,path}) => {
    let user=useSelector(store=>store.userReducer.user)
    let email=useSelector(store=>store.userReducer.email)
    if(user||email) return children
    return <Navigate to={path}/> 
}

export default ProtectedRoute