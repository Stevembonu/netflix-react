import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthcontextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Account from './pages/Account'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    <>
    <AuthcontextProvider>{/*32. we want to conditional render these buttons depending on user logged in or not */}
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path = '/login' element={<Login />}/> {/*36. go to navbar after*/}
      <Route path = '/signup' element={<Signup />}/>
      <Route path = '/account' element={ <ProtectedRoute><Account /></ProtectedRoute>}/> {/*#50 wrap account inside protected route. then go setup cloud firestore then go to firebase.js */}
      </Routes>
    </AuthcontextProvider>
   
    </>
  );
}

export default App;
