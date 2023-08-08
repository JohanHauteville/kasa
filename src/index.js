import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import Header from "./components/Header/"
import Home from "./pages/Home"
import Error from "./pages/Error"
import APropos from "./pages/A-Propos"
import Footer from "./components/Footer/"
import Logement from "./pages/Logement"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
