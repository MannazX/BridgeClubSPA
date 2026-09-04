import { type MainClub } from "../../interfaces/mainClub";

export default function MainClubTable({mainClub}: {mainClub: MainClub}) {
    return (
        <table className="member-table">
            <thead>
                <tr>
                    <th scope="col">Detaljer</th>
                    <th scope="col">Info</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Navn</td>
                    <td>{mainClub.name}</td>
                </tr>
                <tr>
                    <td>Adresse</td>
                    <td>{mainClub.addresS_1}, <br></br>{mainClub.city}, <br></br>{mainClub.ziP_CODE}, <br></br>{mainClub.countrY_CODE}</td>
                </tr>
                <tr>
                    <td>Phones</td>
                    <td>{mainClub.phonE_1}, {mainClub.phonE_2}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{mainClub.email}</td>
                </tr>
                <tr>
                    <td>Home Page</td>
                    <td>{mainClub.homepage}</td>
                </tr>
            </tbody>
        </table>
    )
}