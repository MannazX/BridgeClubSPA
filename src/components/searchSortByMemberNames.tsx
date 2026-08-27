import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeSorting, type RootState } from '../store';
import { useNavigate } from 'react-router-dom';

function SearchSortedMembers() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector<RootState, string>((state) => {
        return state.searchSortedMember.searchName;
    });
    const sorting = useSelector<RootState, string>((state) => {
        return state.searchSortedMember.sortBy;
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName(event.target.value));
    }

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeSorting(event.target.value));
    }

    const handleSubmit = () => {
        navigate("/findSpillere");
    }

    return (
        <form onSubmit={(event) => { event.preventDefault(); handleSubmit() } }>
            <label>Søg Medlem</label>
            <input className="input ml-2" value={name} onChange={handleNameChange}></input>
            <label className="ml-2">Sorter i spillere </label>
            <select className="ml-2" value={sorting} onChange={handleSortChange}>
                <option value="firsT_NAME">Fornavn</option>
                <option value="lasT_NAME">Efternavn</option>
            </select>
            <button type="submit" className="btn btn-primary">Søg</button>
        </form>
    )
}

export default SearchSortedMembers;