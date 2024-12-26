import React from "react"
import UserContextProvider from "./context/UserContextProvider.jsx"
import Login from "./components/Login.jsx"
import Profile from "./components/Profile.jsx"

function App() {
 

  return (
    <UserContextProvider>
    
    <Login/>
    <Profile/>
    
    </UserContextProvider>
  )
}

export default App
