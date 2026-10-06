export interface Pokemon {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
}
export interface PokeProps {
    data: Pokemon[];
}