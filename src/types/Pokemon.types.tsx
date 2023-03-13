export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonObj {
  name: string | undefined;
  base_experience: number | undefined;
  height: number | undefined;
  weight: number | undefined;
  abilities: PokemonAbility[] | undefined;
  types: PokemonType[] | undefined;
  id?: number | undefined;
}
