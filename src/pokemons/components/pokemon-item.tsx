import styled from "@emotion/styled";
import { useFetchPokemon } from "../../pokemon/hooks/useFetchPokemon";
import { PokemonListItem } from "../typings";

type PokemonItem = {
  className?: string;
  pokemon: PokemonListItem;
};

export const PokemonItem = ({ className, pokemon }: PokemonItem) => {
  const { data } = useFetchPokemon(pokemon.url);

  if (!data) {
    return <p>loading</p>;
  }

  console.log({ data });

  return (
    <Root className={className}>
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

const Root = styled.li`
  border-radius: 4px;
  background-color: grey;
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
