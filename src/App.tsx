import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import MemberList from "./components/memberList";
import SearchSortedMemberList from "./components/searchSortedMemberList";
import ClubList from "./components/clubList";
export default function App() {
    return (
      <div>
        <div className="jumbotron pb-3 pt-3">
          <span className="h1">Bridge Central</span>
          <span className="justify-content-between p-0"></span>
          <div className="nav navbar-light bg-light navbar-expand-lg">
            <nav className="nav navbar-nav">
              <Link to='/spillere' className="nav-item nav-link px-2">Spillere</Link>
              <Link to='/klubber' className="nav-item nav-link px-2">Klubber</Link>
            </nav>
          </div>
          
        </div>
        <Routes>
          <Route path='/spillere' element={<MemberList />} />
          <Route path='/klubber' element={<ClubList />} />
          <Route path='/soegSpillere' element={<SearchSortedMemberList />} /> 
        </Routes>
      </div>
    )
}
