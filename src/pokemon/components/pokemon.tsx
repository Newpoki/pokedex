import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { theme } from "../../theme";
import { TypeChips } from "../../type/components/type-chips";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { PokemonTypeName } from "../typings";
import { ReactComponent as BackArrowIcon } from "../../icons/back-arrow.svg";
import { useCallback } from "react";

export const Pokemon = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: pokemon } = useFetchPokemon(params.idOrName);

  const handleGoBackToList = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Root typeName={pokemon?.types[0]?.type?.name}>
      {pokemon && (
        <>
          <UpperPart>
            <StyledBackArrowIcon onClick={handleGoBackToList} />
            <SpriteAndMainData>
              <SpriteWrapper>
                <Sprite src={pokemon?.sprites.other["official-artwork"].front_default} />
              </SpriteWrapper>

              <MainData>
                <Id>#{pokemon.id}</Id>
                <Name>{pokemon.name}</Name>

                <TypeChips types={pokemon.types} />
              </MainData>
            </SpriteAndMainData>

            <Menu>
              <MenuItem>About</MenuItem>
              <MenuItem>Stats</MenuItem>
              <MenuItem>Evolution</MenuItem>
            </Menu>
          </UpperPart>

          <LowerPart></LowerPart>
        </>
      )}
    </Root>
  );
};

const Root = styled.div<{ typeName: PokemonTypeName | undefined }>`
  position: relative;
  background-color: ${({ typeName }) =>
    typeName ? theme.colors.types.background[typeName] : "transparent"};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const UpperPart = styled.div`
  padding: ${theme.spacings.xxxl}px;
  padding-bottom: ${theme.spacings.m}px;
`;

const StyledBackArrowIcon = styled(BackArrowIcon)`
  width: 20px;
  position: relative;
`;

const SpriteAndMainData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: ${theme.spacings.xxl}px;
`;

const MainData = styled.div``;

const Id = styled.h2`
  margin-top: 0;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.55);
  margin-bottom: ${theme.spacings.xs}px;
`;

const Name = styled.h1`
  margin-top: 0;
  text-transform: capitalize;
  color: ${theme.colors.common.white};
  margin-bottom: ${theme.spacings.s}px;
`;

const SpriteWrapper = styled.div`
  display: flex;
  margin-right: ${theme.spacings.l}px;
`;

const Sprite = styled.img`
  width: 150px;
`;

const Menu = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const MenuItem = styled.li`
  color: ${theme.colors.common.white};
`;

const LowerPart = styled.div`
  display: flex;
  flex: 1;
  background-color: ${theme.colors.common.white};
  border-radius: 30px;
`;
