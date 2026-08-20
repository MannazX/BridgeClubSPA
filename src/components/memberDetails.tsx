import { type Member } from "../interfaces/member"

export default function MemberDetails({member}: {member : Member}) {
    return (
        <div key={member.membeR_ID}>
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Navn</th>
                        <th scope="col">Telefon</th>
                        <th scope="col">Fødselsdato</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{member.membeR_ID}</td>
                        <td>{member.name}</td>
                        <td>{member.phonE_1}</td>
                        <td>{member.birthday instanceof Date ? member.birthday.toLocaleDateString() : member.birthday}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
