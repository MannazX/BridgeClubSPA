import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, type RootState } from '../store';
import { useNavigate } from 'react-router-dom';

function SearchSortedMembers() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector<RootState, string>((state) => {
        return state.searchSortedMember.searchName;
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName(event.target.value));
    }

    const handleSubmit = () => {
        navigate("/searchMember");
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit()} }>
            <label>Søg Medlem</label>
            <input className="input ml-2" value={name} onChange={handleNameChange}></input>
        </form>
    )
}

export default SearchSortedMembers;