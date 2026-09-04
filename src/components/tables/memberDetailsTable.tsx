import { type Member } from "../../interfaces/member";

export default function MemberDetailsTable({member}: {member : Member}) {
    return (
        <table className="info-table">
            <thead>
                <tr>
                    <th scope="col">Detalje</th>
                    <th scope="col">Info</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Navn</td>
                    <td>{member.name}</td>
                </tr>
                <tr>
                    <td>Titel</td>
                    <td>{member.title}</td>
                </tr>
                <tr>
                    <td>Adresse</td>
                    <td>{member.addresS_1}</td>
                </tr>
                <tr>
                    <td>Medlem Nr.</td>
                    <td>{member.membeR_NO}</td>
                </tr>
                <tr>
                    <td>Tlf. Privat</td>
                    <td>{member.phonE_1}</td>
                </tr>
                <tr>
                    <td>Tlf. Arbejde</td>
                    <td>{member.phonE_2}</td>
                </tr>
                <tr>
                    <td>Tlf. Mobil</td>
                    <td>{member.phonE_3}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{member.email}</td>
                </tr>
                <tr>
                    <td>Total Bronze</td>
                    <td>{member.totaL_BRONZE}</td>
                </tr>
                <tr>
                    <td>Total Silver</td>
                    <td>{member.totaL_SILVER}</td>
                </tr>
                <tr>
                    <td>Total Gold</td>
                    <td>{member.totaL_GOLD}</td>
                </tr>
                <tr>
                    <td>Total Master</td>
                    <td>{member.totaL_MASTER}</td>
                </tr>
                <tr>
                    <td>HAC Score</td>
                    <td>{member.hac}</td>
                </tr>
            </tbody>
        </table>
    )
}