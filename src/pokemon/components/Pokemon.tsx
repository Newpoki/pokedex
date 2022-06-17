import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useFetchPokemon } from "../hooks/useFetchPokemon";

export const Pokemon = () => {
  const params = useParams();

  const { data: pokemon } = useFetchPokemon(params.idOrName);

  return (
    <Root>
      <p>pokemon</p>
    </Root>
  );
};

const Root = styled.div``;
