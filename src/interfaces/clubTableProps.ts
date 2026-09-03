import { type Club } from "./club";

export interface ClubTableProps {
    clubs: Club[] | undefined;
    selectedId: (id: number) => void;
    navigateToClubMembers: (id: number) => void;
}