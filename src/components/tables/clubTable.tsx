import { type ClubTableProps } from "../../interfaces/clubTableProps"

// import { Link } from "react-router-dom";

export default function ClubTable({clubs, selectedId, navigateToClubMembers}: ClubTableProps) {

    return (

        <table className="member-table">
            <thead>
                <tr>
                    <th scope="col">Klub</th>
                    <th scope="col">Vis Info</th>
                    <th scope="col">Klubspillere</th>
                </tr>
            </thead>
            <tbody>
                {
                    clubs?.map((club) => (
                    
                        <tr>
                            <td>{club.cluB_NAME}</td>
                            <td><button className="btn btn-primary" onClick={() => selectedId(club.cluB_ID)}>Vælg</button></td>
                            <td><button className="btn btn-secondary" onClick={() => navigateToClubMembers(club.cluB_ID)}>Vælg</button></td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
}