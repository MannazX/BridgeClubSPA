import { type Member } from "./member";

export interface MemberTableProps {
    members: Member[] | null;
    selectedId: (id: number) => void;
}