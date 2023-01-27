import { IPokemon } from "../../interfaces/pokemon";
import Stat from "../Stat";

interface Props {
  pokemon: IPokemon;
  loading: boolean;
  error: boolean;
}

export default function PokedexScreen({ pokemon, loading, error }: Props) {
  return (
    <div className="pokedex-screen">
      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemon?.name}</h2>
        <img
          className="pokemon-img"
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
        />
        <ul className="pokemon-stats">
          {pokemon?.stats.map((item) => (
            <Stat key={item.stat.name} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
