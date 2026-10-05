export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;

    abilities: {
        is_hidden: boolean;
        slot: number;
        ability: {
            name: string;
            url: string;
        };
    }[];

    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];

    sprites: {
        front_default: string;
    };
}

export interface PokeProps {
    data: Pokemon[];
}