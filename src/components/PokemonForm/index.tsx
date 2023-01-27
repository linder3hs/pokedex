import { ChangeEvent } from "react";

interface Props {
  pokemon: string;
  handleSubmit: () => void;
  setPokemon: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function PokemonForm({
  handleSubmit,
  pokemon,
  setPokemon,
}: Props) {
  return (
    <div className="pokemon-form">
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokemon}
        placeholder="Busca tu pokemon"
        onChange={setPokemon}
        autoComplete="off"
      />
      <input
        onClick={handleSubmit}
        type="submit"
        className="pokemon-btn"
        value=""
      />
    </div>
  );
}
