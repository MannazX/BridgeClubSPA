import FetchMainClub from "../helpers/fetchMainClub";
import MainClubTable from "./tables/mainClubTable";

export default function MainClubItem() {
    const mainClubData = FetchMainClub();
    let content;

    if (!mainClubData) {
        content = <div>Ingen hovedklub data kunne hentes</div>
    }
    else if (typeof mainClubData === "boolean") {
        content = <div>Henter hovedklubdata</div>
    }
    else {
        content = <div><MainClubTable mainClub={mainClubData} /></div>
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '200px', width: '100%'}}>{content}</div>
    )
}