//so account page can only display when logged in. else it bounces us back to home. go to app.js for 50
import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    if(!user) {
        return <Navigate to='/' />
    }else {
        return children
    }
}

export default ProtectedRoute