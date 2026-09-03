import type { MemberTableProps } from "../../interfaces/memberTableProps";

export default function MemberTable({members, selectedId}: MemberTableProps) {

    return (

        <table className="member-table">
            <thead>
                <tr>
                    <th scope="col">Medlemmer</th>
                    <th scope="col">Vis info</th>
                </tr>
            </thead>
            <tbody>
                {
                    members?.map((member) => (
                        <tr>    
                            <td>{member.name}</td>
                            <td><button className="btn btn-primary" onClick={() => selectedId(member.membeR_ID)}>Vælg</button></td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
}
