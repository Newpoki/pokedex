import styled from "@emotion/styled";
import { useMemo } from "react";
import { useFetchPokemon } from "../../pokemon/hooks/useFetchPokemon";
import { PokemonTypeName } from "../../pokemon/typings";
import { theme } from "../../theme";
import { PokemonListItem } from "../typings";

type PokemonItemProps = {
  className?: string;
  pokemon: PokemonListItem;
};

export const PokemonItem = ({ className, pokemon }: PokemonItemProps) => {
  const { data } = useFetchPokemon(pokemon.url);

  const pokemonFirstType = useMemo(() => {
    // It looks like the first one is always the first in array,
    // but as it's not our API, we must ensure by ourselves.
    return data?.types.find((type) => type.slot === 1)?.type.name;
  }, [data?.types]);

  if (!data) {
    return <p>loading</p>;
  }

  return (
    <Root className={className} type={pokemonFirstType}>
      <Id># {data.id}</Id>

      <Name>{data.name}</Name>

      <TypeList>
        {data.types.map((type) => {
          return <Type key={type.slot}>{type.type.name}</Type>;
        })}
      </TypeList>

      <Sprite src={data.sprites.front_default} alt={`${data.name} front sprite`} />
    </Root>
  );
};

const Root = styled.li<{ type: PokemonTypeName | undefined }>`
  border-radius: 10px;
  background-color: ${({ type }) =>
    type ? theme.colors.types.background[type] : theme.colors.common.grey};
  padding: 8px;
  position: relative;
`;

const Id = styled.b`
  font-size: 10px;
  color: black;
`;

const Name = styled.h3`
  font-size: 18px;
  color: white;
`;

const TypeList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Type = styled.li`
  border-radius: 2px;
  background-color: red;
  color: white;
  margin-right: 4px;
`;

const Sprite = styled.img`
  position: absolute;
  right: 0;
  top: -40px;
`;
