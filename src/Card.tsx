import { FC } from "react";
import { PokemonObj } from "./types/Pokemon.types";
import "./Card.css";

interface ICardProps extends PokemonObj {
  number: number;
  shiftIndex: (action: string) => void;
}

const Card: FC<ICardProps> = ({
  name,
  number,
  abilities,
  height,
  weight,
  types,
  base_experience,
  shiftIndex,
}) => {
  return (
    <div className="Card">
      <div className="wrapper">
        <button className="prev-btn" onClick={() => shiftIndex("prev")}>
          &lt;
        </button>
        <img
          width="475"
          height="475"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            number > 1010 ? number + 8990 : number
          }.png`}
        />
        <div className="details">
          <div>NAME : {name}</div>
          <p>Type</p>
          {types?.map((t) => (
            <li key={t.slot}>
              {t.slot} {t.type.name}
            </li>
          ))}
          <p>Height : {height}</p>
          <p>Weight : {weight}</p>
          <p>Abilities :</p>
          {abilities?.map((abil) => (
            <li key={abil.slot}>
              {abil.slot} {abil.ability.name}
            </li>
          ))}
          <p>Base Experience : {base_experience}</p>
        </div>
        <button className="next-btn" onClick={() => shiftIndex("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Card;
