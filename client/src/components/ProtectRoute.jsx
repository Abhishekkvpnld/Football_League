import { useUser } from "../context/UserContext";



const ProtectRoute = ({ children }) => {

    const { user } = useUser();

    console.log(user)

    if (user === null) {
        return <Navigate to="/login" />
    } else {
        return children;
    }

}

export default ProtectRoute