import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeSorting, type RootState } from '../store';
import { useNavigate } from 'react-router-dom';

export default function SearchSortedMembers() {

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

    const handleSortChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        dispatch(changeSorting(event.target.value));
    }

    const handleSubmit = () => {
        navigate("/soegSpillere");
    }

    return (
        <form onSubmit={(event) => { event.preventDefault(); handleSubmit() } }>
            <span className="inline-block mr-2">Søg Spiller</span>
            <input className="input inline-block mx-2" value={name} onChange={handleNameChange}></input>
            
            
            <div className="inline-block mx-2">
                <span className="input inline-block mx-2">Sorter Efter</span>
                <label className="mr-3 cursor-pointer">
                    <input type="radio" name="sorting" value="firsT_NAME" checked={sorting === "firsT_NAME"} onChange={handleSortChange} className="mr-1" />
                    Fornavn
                </label>
                
                <label className="inline-block mx-2">
                    <input type="radio" name="sorting" value="lasT_NAME" checked={sorting === "lasT_NAME"} onChange={handleSortChange} className='mr-1' />
                    Efternavn 
                </label>
            </div>
            <span className="input inline-block mx-2"><br></br></span>
            <button type="submit" className="btn btn-primary ml-2">Søg</button>
            
        </form>
    )
}