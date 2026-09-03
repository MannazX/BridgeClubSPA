import FetchMainClub from "../helpers/fetchMainClub";

export default function MainClubItem() {
    const mainClubData = FetchMainClub();
    let content;

    if (!mainClubData) {
        content = <div>Ingen hovedklub data kunne hentes</div>
    }
    else {
        content = <div>Currently Empty</div>
    }

    return (
        <div>{content}</div>
    )
}