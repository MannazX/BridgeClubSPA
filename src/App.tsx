import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import MemberDetails from "./components/memberDetails";

export default function App() {
    return (
      <div>
        <div className="jumbotron pb-3 pt-3">
          <div className="nav navbar-expand-lg">
            <nav className="nav navbar-nav">
              <Link to='/' className='nav-item nav-link'>Home</Link>
              <Link to='/' className='nav-item nav-link'>Members</Link>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<MemberDetails />} />
          <Route path='/members' element={<MemberDetails />} />
        </Routes>
      </div>
    )
}
