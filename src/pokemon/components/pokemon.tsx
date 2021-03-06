import styled from "@emotion/styled";
import { Navigate, NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { theme } from "../../theme";
import { TypeChips } from "../../type/components/type-chips";
import { useFetchPokemon } from "../hooks/use-fetch-pokemon";
import { PokemonTypeName } from "../typings";
import { ReactComponent as BackArrowIcon } from "../../icons/back-arrow.svg";
import { useCallback, useEffect, useMemo } from "react";
import { PokemonAbout } from "./pokemon-about";
import { ReactComponent as PokeballLowOpacityIcon } from "../../icons/pokeball-low-opacity.svg";
import { ReactComponent as PointsIcon } from "../../icons/points.svg";
import { ReactComponent as PokemonBackgroundCircle } from "../../icons/pokemon-background-circle.svg";
import { PokemonStats } from "./pokemon-stats";
import { Skeleton } from "../../common/components/Skeleton";
import { PokemonAboutSkeleton } from "./pokemon-about-skeleton";
import { PokemonStatsSkeleton } from "./pokemon-stats-skeleton";
import { PokemonEvolution } from "./pokemon-evolution";
import { PokemonEvolutionSkeleton } from "./pokemon-evolution-skeleton";
import { formatPokemonId } from "../utils/format-pokemon-id";
import { keyframes } from "@emotion/react";

const POKEMON_SPRITE_SIZE = 125;

const DESKTOP_POKEMON_SPRITE_SIZE = 200;

export const Pokemon = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: pokemon, isError } = useFetchPokemon(params.idOrName);

  const pokemonFirstType = useMemo(() => {
    return pokemon?.types[0]?.type?.name;
  }, [pokemon?.types]);

  const handleGoBackToList = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (isError) {
      navigate("/not-found");
    }
  }, [isError, navigate]);

  return (
    <Root typeName={pokemonFirstType ?? "normal"}>
      <UpperPartAndMenu>
        <UpperPart>
          <StyledBackArrowIcon onClick={handleGoBackToList} />
          <SpriteAndMainData>
            <SpriteWrapper>
              {pokemon && <Sprite src={pokemon?.sprites.other["official-artwork"].front_default} />}
              {!pokemon && (
                <Skeleton
                  shape="round"
                  width={`${POKEMON_SPRITE_SIZE}px`}
                  height={`${POKEMON_SPRITE_SIZE}px`}
                />
              )}
              <StyledPokemonBackgroundCircle />
            </SpriteWrapper>

            {pokemon && (
              <MainData>
                <IdAndName>
                  <Id>{formatPokemonId(pokemon.id)}</Id>
                  <Name>{pokemon.name}</Name>
                </IdAndName>

                <StyledTypeChips types={pokemon.types.map((type) => type.type)} />

                <StyledPointsIcon />
              </MainData>
            )}
          </SpriteAndMainData>
        </UpperPart>

        <Menu typeName={pokemonFirstType}>
          <MenuItem to="about" isActive={params["*"] === "about"}>
            {params["*"] === "about" && <StyledPokeballLowOpacityIcon />}
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
      </UpperPartAndMenu>

      <LowerPart>
        <Routes>
          <>
            <Route
              element={pokemon ? <PokemonStats pokemon={pokemon} /> : <PokemonStatsSkeleton />}
              path="stats"
            />
            <Route
              element={
                pokemon ? <PokemonEvolution pokemon={pokemon} /> : <PokemonEvolutionSkeleton />
              }
              path="evolutions"
            />
            <Route
              element={pokemon ? <PokemonAbout pokemon={pokemon} /> : <PokemonAboutSkeleton />}
              path="about"
            />
            <Route element={<Navigate to="about" replace />} path="*" />
          </>
        </Routes>
      </LowerPart>
    </Root>
  );
};

const Root = styled.div<{ typeName: PokemonTypeName | undefined }>`
  position: relative;
  background-color: ${({ typeName }) =>
    typeName ? theme.colors.backgroundTypes[typeName] : "transparent"};
  display: flex;
  flex-direction: column;
  transition: 0.3s background-color;
  min-height: 100vh;
  width: 100vw;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

const UpperPart = styled.div`
  padding: 40px;
  padding-bottom: ${theme.spacings.l}px;
`;

const UpperPartAndMenu = styled.div`
  @media screen and (min-width: ${theme.breakpoints.md}px) {
    width: 500px;
  }
`;

const StyledBackArrowIcon = styled(BackArrowIcon)`
  width: 20px;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    width: 36px;
    height: 36px;
  }
`;

const SpriteAndMainData = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 40px;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;

const MainData = styled.div``;

const IdAndName = styled.div`
  @media screen and (min-width: ${theme.breakpoints.md}px) {
    display: flex;
    align-items: baseline;
    flex-direction: row-reverse;
  }
`;

const Id = styled.h2`
  margin-top: 0;
  font-size: 16px;
  color: ${theme.colors.text.number};
  margin-bottom: ${theme.spacings.xs}px;
  font-weight: 700;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    font-size: 24px;
  }
`;

const Name = styled.h1`
  margin-top: 0;
  text-transform: capitalize;
  color: ${theme.colors.text.white};
  margin-bottom: ${theme.spacings.s}px;
  font-size: 32px;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    font-size: 40px;
    margin-right: ${theme.spacings.l}px;
  }
`;

const StyledTypeChips = styled(TypeChips)`
  @media screen and (min-width: ${theme.breakpoints.md}px) {
    & span {
      font-size: 20px;
    }

    & li {
      padding: ${theme.spacings.s}px;
    }
  }
`;

const StyledPointsIcon = styled(PointsIcon)`
  position: absolute;
  right: -24px;
  bottom: -20px;
  width: 65px;
  height: 65px;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    font-size: 24px;
    top: 0;
    width: 125px;
    height: 125px;
    right: -50px;
  }
`;

const SpriteWrapper = styled.div`
  display: flex;
  margin-right: ${theme.spacings.l}px;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    margin-bottom: ${theme.spacings.xxxl}px;
    margin-right: 0;
  }
`;

const Sprite = styled.img`
  width: ${POKEMON_SPRITE_SIZE}px;
  /* In order to be displayed above the pokemon background circle icon */
  z-index: 2;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    width: ${DESKTOP_POKEMON_SPRITE_SIZE}px;
  }
`;

const StyledPokemonBackgroundCircle = styled(PokemonBackgroundCircle)`
  position: absolute;
  width: ${POKEMON_SPRITE_SIZE}px;
  height: ${POKEMON_SPRITE_SIZE}px;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    width: ${DESKTOP_POKEMON_SPRITE_SIZE}px;
    height: ${DESKTOP_POKEMON_SPRITE_SIZE}px;
  }
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
  font-size: 16px;

  ${({ isActive }) =>
    isActive &&
    `
      opacity: 1;
      font-weight: 700;
  `};

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    font-size: 24px;
  }
`;

const appearAnimation = keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`;

const StyledPokeballLowOpacityIcon = styled(PokeballLowOpacityIcon)`
  position: absolute;
  width: 100px;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: 0.3s ${appearAnimation} ease-in-out forwards;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    top: -185%;
    width: 130px;
    height: 130px;
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

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    border-bottom-left-radius: 30px;
    border-top-right-radius: 0;
  }
`;
