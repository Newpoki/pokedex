import { PokemonsListCardSkeleton } from "./pokemons-list-card-skeleton";

const SKELETON_ARRAY = Array(10).fill(null);

export const PokemonsListSkeleton = () => {
  return (
    <ul className="pokemons-list">
      {SKELETON_ARRAY.map((_value, index) => (
        <PokemonsListCardSkeleton key={index} />
      ))}
    </ul>
  );
};
