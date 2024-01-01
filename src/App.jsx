import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"
import Course from "./pages/Course"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
