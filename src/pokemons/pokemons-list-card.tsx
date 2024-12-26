import { useFetchPokemon } from "@/pokemon/use-fetch-pokemon";

type PokemonsListCardProps = {
  url: string;
};

export const PokemonsListCard = ({ url }: PokemonsListCardProps) => {
  const { data, isPending } = useFetchPokemon({ url, type: "url" });

  return <div className="rounded-[10px]">pouet</div>;
};
