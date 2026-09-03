import { type Member } from "./member";

export interface MemberTableProps {
    members: Member[] | undefined;
    selectedId: (id: number) => void;
}