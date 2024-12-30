import TopHalfPokeballWhite from "@/assets/patterns/top-half-pokeball-white.svg";
import { PokemonsTabsItem } from "./pokemons-tabs-item";
import { useState } from "react";

const LINKS = [
  { to: "/pokemon/$name", label: "About" },
  { to: "/pokemon/$name/stats", label: "Stats" },
  { to: "/pokemon/$name/evolution", label: "Evolution" },
] as const;

const POKEBALL_ICON_SIZE = 100;

export const PokemonTabs = () => {
  const [activeLinkCenterPosition, setActiveLinkCenterPosition] = useState<
    number | null
  >(null);

  return (
    <nav className="relative flex items-center justify-between px-10 py-4">
      {activeLinkCenterPosition != null && (
        <TopHalfPokeballWhite
          className="absolute bottom-0 left-0 z-0 transition-transform"
          style={{
            transform: `translate(${activeLinkCenterPosition - POKEBALL_ICON_SIZE / 2}px, 50%)`,
            width: POKEBALL_ICON_SIZE,
            height: POKEBALL_ICON_SIZE,
          }}
        />
      )}

      {LINKS.map((link) => {
        return (
          <PokemonsTabsItem
            to={link.to}
            key={link.to}
            setActiveLinkCenterPosition={setActiveLinkCenterPosition}
          >
            {link.label}
          </PokemonsTabsItem>
        );
      })}
    </nav>
  );
};
