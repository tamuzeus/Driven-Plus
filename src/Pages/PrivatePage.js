import { Navigate } from "react-router-dom"

export default function PrivatePage({ children }) {

    const auth = JSON.parse(localStorage.getItem('token'))
    if (auth !== null) {
        return (
            <>
                {children}
            </>
        )
    }else{
        return <Navigate to='/'/>
    }

}