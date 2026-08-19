import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import MemberList from "./components/memberList";
export default function App() {
    return (
      <div>
        <div className="jumbotron pb-3 pt-3">
          <div className="nav navbar-expand-lg">
            <nav className="nav navbar-nav">
              <Link to='/' className='nav-item nav-link'>Home</Link>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<MemberList />} />
        </Routes>
      </div>
    )
}
