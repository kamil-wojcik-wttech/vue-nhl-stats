export interface Player {
    jerseyNumber: string;
    person: {
        id: number;
        fullName: string;
    };
    postion: {
        
    };
}

export type Roster = Player[];