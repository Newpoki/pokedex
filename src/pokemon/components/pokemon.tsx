import styled from "@emotion/styled";
import { NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { theme } from "../../theme";
import { TypeChips } from "../../type/components/type-chips";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { PokemonTypeName } from "../typings";
import { ReactComponent as BackArrowIcon } from "../../icons/back-arrow.svg";
import { useCallback } from "react";
import { PokemonAbout } from "./pokemon-about";
import { ReactComponent as PokeballLowOpacityIcon } from "../../icons/pokeball-low-opacity.svg";
import { ReactComponent as PointsIcon } from "../../icons/points.svg";
import { ReactComponent as PokemonBackgroundCircle } from "../../icons/pokemon-background-circle.svg";

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
                <StyledPokemonBackgroundCircle />
              </SpriteWrapper>

              <MainData>
                <Id>#{pokemon.id}</Id>
                <Name>{pokemon.name}</Name>

                <TypeChips types={pokemon.types.map((type) => type.type)} />

                <StyledPointsIcon />
              </MainData>
            </SpriteAndMainData>

            <Menu>
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
          </UpperPart>

          <LowerPart>
            <Routes>
              <Route element={<p>stats</p>} path="stats" />
              <Route element={<p>evolutions</p>} path="/evolutions" />
              <Route element={<PokemonAbout pokemon={pokemon} />} path="*" />
            </Routes>
          </LowerPart>
        </>
      )}
    </Root>
  );
};

const POKEMON_SPRITE_SIZE = 150;

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
  color: ${theme.colors.common.white[900]};
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

const Menu = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const MenuItem = styled(NavLink)<{ isActive: boolean }>`
  position: relative;
  color: ${theme.colors.common.white[500]};
  text-decoration: none;
  padding: 0 ${theme.spacings.l}px;

  ${({ isActive }) =>
    isActive &&
    `
      color: ${theme.colors.common.white[900]};
      font-weight: bold;
    `}
`;

const StyledPokeballLowOpacityIcon = styled(PokeballLowOpacityIcon)`
  position: absolute;
  left: 0;
  width: 100%;
  top: -100%; ;
`;

const LowerPart = styled.div`
  position: relative;
  /* In order to be above the absolute positionated pokeball icon on the about link */
  z-index: 2;
  display: flex;
  flex: 1;
  background-color: ${theme.colors.common.white[900]};
  border-radius: 30px;
  overflow: auto;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 28px;
  flex-direction: column;
`;
