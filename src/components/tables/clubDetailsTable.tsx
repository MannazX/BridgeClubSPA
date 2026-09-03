import { type Club } from "../../interfaces/club";
import FetchMemberById from "../../helpers/fetchMembersById";
import { Weekdays } from "../../enums/weekdays";

export default function ClubDetailsTable({club}: {club: Club}) {

    const leaderID = typeof club.leadeR_ID === "number" ? club.leadeR_ID : 0;
    const leaderData = FetchMemberById(leaderID);

    let leader;
    let gameDay;

    if (!leaderData) {
        console.log("Data could not be fetched");
    } else {
        leader = leaderData.name;
    }

    switch (club.gamE_DAY) {
        case 1:
            gameDay = Weekdays.Mandag;
            break;
        case 2:
            gameDay = Weekdays.Tirsdag;
            break;
        case 3:
            gameDay = Weekdays.Onsdag;
            break;
        case 4:
            gameDay = Weekdays.Torsdag;
            break;
        case 5:
            gameDay = Weekdays.Fredag;
            break;
        case 6:
            gameDay = Weekdays.Lørdag;
            break;
        case 7:
            gameDay = Weekdays.Søndag;
            break;
    }

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
                    <td>Klubnavn</td>
                    <td>{club.cluB_NAME}</td>
                </tr>
                <tr>
                    <td>Spilledag</td>
                    <td>{gameDay}</td>
                </tr>
                <tr>
                    <td>Klubleder</td>
                    <td>{club.leadeR_ID != 0 ? leader : ""}</td>
                </tr>
            </tbody>
        </table>
    )
}