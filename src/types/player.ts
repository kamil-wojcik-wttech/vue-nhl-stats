export interface Player {
    jerseyNumber: string;
    person: {
        id: number;
        fullName: string;
    };
    position: {
        name: string
    };
}

export type Roster = Player[];