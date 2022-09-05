import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Login from "./Components/Login/Login"
import { UserStorage } from "./Context/UserContext"
import User from "./Components/User/User"
import ProtectedRoute from "./Components/Helper/ProtectedRoute"

function App() {

  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="conta/*" element={<ProtectedRoute> <User /> </ProtectedRoute>} />
        </Routes>
        <Footer />
      </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
