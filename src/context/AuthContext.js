import { createContext, useContext, useEffect, useState } from "react";
import { auth, db} from "../Firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth' //from the site not from a component
//after setting up, go to app.js for 32
import { setDoc, doc } from "firebase/firestore"; //we want to initialize an array for each new user,so whenever they save a movie, it goes into that array.  edit signUp func below (step 53) @1:51:30

const AuthContext = createContext()
export function AuthcontextProvider({children}) {
    const [user, setUser] = useState({})//33

    function signUp(email, password) {//34
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {//53. we deleted return and added this. so whenever new user signs up, it creates a users file and then an email. now we go to movie.jsx
            savedShows:[] 
         }) 
    
    }
    function logIn(email, password) {//34
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(()=>{ //35put it in useeffect so it only runs when u check once when component mounts to see if user is logged in
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser) 
        })
       return () => {
        unsubscribe() //36, create account, login, signup.jsx, add routes in app.js
       }
    })

    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}