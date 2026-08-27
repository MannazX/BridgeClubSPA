import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import MemberList from "./components/memberList";
import SearchSortedMemberList from "./components/searchSortedMemberList";
import SearchSortedMembers from "./components/searchSortByMemberNames";
export default function App() {
    return (
      <div>
        <div className="jumbotron pb-3 pt-3">
          <div className="nav navbar-expand-lg">
            <nav className="nav navbar-nav">
              <Link to='/spillere' className='nav-item nav-link'>Spillere</Link>
            </nav>
          </div>
          <span className="h1">Bridge Central</span>
          <span className="d-flex justify-content-between p-0">Søg på spillere<SearchSortedMembers /></span>
        </div>
        <Routes>
          <Route path='/spillere' element={<MemberList />} />
          <Route path='/findSpillere' element={<SearchSortedMemberList />} />
        </Routes>
      </div>
    )
}
