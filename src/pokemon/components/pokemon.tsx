import styled from "@emotion/styled";
import { NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { theme } from "../../theme";
import { TypeChips } from "../../type/components/type-chips";
import { useFetchPokemon } from "../hooks/use-fetch-pokemon";
import { PokemonTypeName } from "../typings";
import { ReactComponent as BackArrowIcon } from "../../icons/back-arrow.svg";
import { useCallback, useMemo } from "react";
import { PokemonAbout } from "./pokemon-about";
import { ReactComponent as PokeballLowOpacityIcon } from "../../icons/pokeball-low-opacity.svg";
import { ReactComponent as PointsIcon } from "../../icons/points.svg";
import { ReactComponent as PokemonBackgroundCircle } from "../../icons/pokemon-background-circle.svg";
import { PokemonStats } from "./pokemon-stats";
import { PokemonEvolution } from "./pokemon-evolution";

export const Pokemon = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: pokemon } = useFetchPokemon(params.idOrName);

  const pokemonFirstType = useMemo(() => {
    return pokemon?.types[0]?.type?.name;
  }, [pokemon?.types]);

  const handleGoBackToList = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Root typeName={pokemonFirstType}>
      {pokemon && (
        <>
          <UpperPart>
            <StyledBackArrowIcon onClick={handleGoBackToList} />
            <SpriteAndMainData>
              <SpriteWrapper>
                <Sprite src={pokemon?.sprites.other["official-artwork"].front_default} />
                <StyledPokemonBackgroundCircle />
              </SpriteWrapper>

              <MainData>
                <Id>#{pokemon.id}</Id>
                <Name>{pokemon.name}</Name>

                <TypeChips types={pokemon.types.map((type) => type.type)} />

                <StyledPointsIcon />
              </MainData>
            </SpriteAndMainData>
          </UpperPart>

          <Menu typeName={pokemonFirstType}>
            <MenuItem to="" isActive={params["*"] === ""}>
              {params["*"] === "" && <StyledPokeballLowOpacityIcon />}
              About
            </MenuItem>

            <MenuItem to="stats" isActive={params["*"] === "stats"}>
              {params["*"] === "stats" && <StyledPokeballLowOpacityIcon />}
              Stats
            </MenuItem>

            <MenuItem to="evolutions" isActive={params["*"] === "evolutions"}>
              {params["*"] === "evolutions" && <StyledPokeballLowOpacityIcon />}
              Evolution
            </MenuItem>
          </Menu>

          <LowerPart>
            <Routes>
              <Route element={<PokemonStats pokemon={pokemon} />} path="stats" />
              <Route element={<PokemonEvolution pokemon={pokemon} />} path="evolutions" />
              <Route element={<PokemonAbout pokemon={pokemon} />} path="" />
            </Routes>
          </LowerPart>
        </>
      )}
    </Root>
  );
};

const POKEMON_SPRITE_SIZE = 125;

const Root = styled.div<{ typeName: PokemonTypeName | undefined }>`
  position: relative;
  background-color: ${({ typeName }) =>
    typeName ? theme.colors.backgroundTypes[typeName] : "transparent"};
  display: flex;
  flex-direction: column;
`;

const UpperPart = styled.div`
  padding: 40px;
  padding-bottom: ${theme.spacings.l}px;
`;

const StyledBackArrowIcon = styled(BackArrowIcon)`
  width: 20px;
  position: relative;
  cursor: pointer;
`;

const SpriteAndMainData = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 40px;
`;

const MainData = styled.div``;

const Id = styled.h2`
  margin-top: 0;
  font-size: 16px;
  color: ${theme.colors.text.number};
  margin-bottom: ${theme.spacings.xs}px;
  font-weight: 700;
`;

const Name = styled.h1`
  margin-top: 0;
  text-transform: capitalize;
  color: ${theme.colors.text.white};
  margin-bottom: ${theme.spacings.s}px;
`;

const StyledPointsIcon = styled(PointsIcon)`
  position: absolute;
  right: -24px;
  bottom: -20px;
`;

const SpriteWrapper = styled.div`
  display: flex;
  margin-right: ${theme.spacings.l}px;
  position: relative;
`;

const Sprite = styled.img`
  width: ${POKEMON_SPRITE_SIZE}px;
  /* In order to be displayed above the pokemon background circle icon */
  z-index: 2;
`;

const StyledPokemonBackgroundCircle = styled(PokemonBackgroundCircle)`
  position: absolute;
  width: ${POKEMON_SPRITE_SIZE}px;
  height: ${POKEMON_SPRITE_SIZE}px;
`;

const Menu = styled.ul<{ typeName: PokemonTypeName | undefined }>`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacings.xxl}px 40px ${theme.spacings.l}px;
  position: sticky;
  top: 0px;
  background-color: ${({ typeName }) =>
    typeName ? theme.colors.backgroundTypes[typeName] : "transparent"};
  z-index: 3;
`;

const MenuItem = styled(NavLink)<{ isActive: boolean }>`
  position: relative;
  color: ${theme.colors.text.white};
  opacity: 0.5;
  text-decoration: none;
  font-weight: 400;
  padding: 0 ${theme.spacings.l}px;
  transition: 0.3s;

  ${({ isActive }) =>
    isActive &&
    `
      opacity: 1;
      font-weight: 700;
    `}
`;

const StyledPokeballLowOpacityIcon = styled(PokeballLowOpacityIcon)`
  position: absolute;
  width: 100px;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: 0.3s appear ease-in-out forwards;

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const LowerPart = styled.div`
  position: relative;
  /* In order to be above the absolute positionated pokeball icon on the about link */
  z-index: 2;
  display: flex;
  flex: 1;
  background-color: ${theme.colors.background.white};
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 40px;
  padding-bottom: 0;
  flex-direction: column;
`;
