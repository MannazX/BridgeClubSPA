import FetchMembers from "../../helpers/fetchMembers";
import { type MemberClub } from "../../interfaces/memberClub";
import { type PartnerPair } from "../../interfaces/partnerPair";
export default function MemberClubTable({memberClubs}: {memberClubs: MemberClub[] | null}) {
    const memberData = FetchMembers();
    let memberName: string;
    let partnerName: string;

    const partnerPairs: PartnerPair[] = [];
    memberClubs?.map((memClub) => {
        memberData?.map((member) => {
            if (memClub.membeR_ID === member.membeR_ID) {
                memberName = String(member.name);
            }
        })
        memberData?.map((partner) => {
            if (memClub.partneR_ID === partner.membeR_ID) {
                partnerName = String(partner.name);
            }
        })
        partnerPairs.push({memberName, partnerName})
    })
    

    return (
        <table className="member-table">
            <thead>
                <tr>
                    <th scope="col">Spiller</th>
                    <th scope="col">Makker</th>
                </tr>
            </thead>
            <tbody>
                {
                    partnerPairs.map((pair) => (
                        <tr>
                            <td>{pair.memberName}</td>
                            <td>{pair.partnerName}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}