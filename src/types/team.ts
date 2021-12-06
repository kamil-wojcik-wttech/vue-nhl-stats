export interface Team {
    abbreviation: string;
    conference: {
        name: string;
    };
    division: {
        name: string;
    };
    firstYearOfPlay: string;
    id: number;
    name: string;
    officialSiteUrl: string;
    venue: {
        name: string;
        city: string;
    };
}

export type Teams = Team[];