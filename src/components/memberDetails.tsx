import { type Member } from "../interfaces/member"

export default function MemberDetails({member}: {member : Member}) {
    return (
        <div key={member.memberId}>Name: {member.name}</div>
    )
}
