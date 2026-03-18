import { Routes, Route,useLocation  } from "react-router-dom"

import AboutApp from "./AboutApp"
import { Index } from "."

function App() {
  const location = useLocation();
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutApp />} />
      </Routes>
    </div>
  )
}

export default App