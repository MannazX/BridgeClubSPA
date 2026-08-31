import { type Club } from "../interfaces/club";
// import { Link } from "react-router-dom";

export default function ClubTable({clubs}: {clubs: Club[] | undefined}) {

    return (

        <table className="member-table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Navn</th>
                    <th scope="col">Info</th>
                </tr>
            </thead>
            <tbody>
                {
                    clubs?.map((club) => (
                    
                        <tr>
                            <td>{club.cluB_ID}</td>    
                            <td>{club.cluB_NAME}</td>
                            <td>Se Info</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
}