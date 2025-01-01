import {
  ChainLink,
  EvolutionDetail,
} from "@/evolution-chain/evolution-chain-types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { pokemonQueryOptions } from "./pokemon-query-options";
import PokeballGreyPattern from "@/assets/patterns/pokeball-grey.svg";
import LeftArrow from "@/assets/icons/left-arrow.svg";
import { getPokemonSprite } from "./utils/get-pokemon-sprite";
import { getPokemonDisplayedId } from "./utils/get-pokemon-displayed-id";
import { useCallback } from "react";

type PokemonEvolutionEntryProps = {
  target: ChainLink;
  fromName: string;
};

export const PokemonEvolutionEntry = ({
  fromName,
  target,
}: PokemonEvolutionEntryProps) => {
  const { data: fromPokemonData } = useSuspenseQuery(
    pokemonQueryOptions(fromName),
  );
  const { data: targetPokemonData } = useSuspenseQuery(
    pokemonQueryOptions(target.species.name),
  );

  // Put this into a dedicated component and find a way to improve display
  const getEvolutionCondition = useCallback(
    (evolutionDetail: EvolutionDetail) => {
      const formatedRelativePhysicalStats = () => {
        if (evolutionDetail.relative_physical_stats === 1) {
          return "Atk. > Defense ";
        }

        if (evolutionDetail.relative_physical_stats === -1) {
          return "Atk. < Defense";
        }

        if (evolutionDetail.relative_physical_stats === 0) {
          return "Atk = Defense";
        }
      };

      if (evolutionDetail.trigger.name === "level-up") {
        if (evolutionDetail.min_level) {
          if (evolutionDetail.time_of_day) {
            return `LvL. Up at ${evolutionDetail.min_level} while it's ${evolutionDetail.time_of_day}`;
          }

          if (evolutionDetail.gender) {
            return `LvL. Up at ${evolutionDetail.min_level} being a ${
              evolutionDetail.gender === 2 ? "male" : "female"
            }`;
          }

          // Must check for different than null because it can be a number
          if (evolutionDetail.relative_physical_stats !== null) {
            return `LvL. Up at ${evolutionDetail.min_level} with ${formatedRelativePhysicalStats()}`;
          }

          return `(Level ${evolutionDetail.min_level})`;
        }

        if (evolutionDetail.time_of_day) {
          return `LvL. Up while it's ${evolutionDetail.time_of_day}`;
        }

        if (evolutionDetail.location) {
          return `LvL. Up at ${evolutionDetail.location.name}`;
        }

        if (evolutionDetail.known_move_type) {
          return `LvL. Up knnowing a ${evolutionDetail.known_move_type.name} move`;
        }

        if (evolutionDetail.min_beauty) {
          return `LvL. Up with ${evolutionDetail.min_beauty} beauty`;
        }

        if (evolutionDetail.min_happiness) {
          return `LvL. Up with ${evolutionDetail.min_happiness} hapiness`;
        }

        if (evolutionDetail.known_move) {
          return `LvL. Up knowing ${evolutionDetail.known_move.name}`;
        }

        return "LvL. Up (No more data)";
      }

      const itemName =
        evolutionDetail.item?.name ?? evolutionDetail.held_item?.name;

      if (evolutionDetail.trigger.name === "use-item" && itemName != null) {
        if (evolutionDetail.gender) {
          return `(${itemName} and being a ${evolutionDetail.gender === 2 ? "male" : "female"})`;
        }

        return `(${itemName})`;
      }

      if (evolutionDetail.trigger.name === "trade") {
        if (evolutionDetail.held_item) {
          return `Trade holding ${itemName}`;
        }

        if (evolutionDetail.trade_species) {
          return `Trade with a ${evolutionDetail.trade_species.name}`;
        }

        return `Trading`;
      }
    },
    [],
  );

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="relative flex items-center justify-center">
          <PokeballGreyPattern className="absolute h-[100px] w-[100px]" />

          <img
            src={getPokemonSprite(fromPokemonData.sprites)}
            className="relative h-[75px] w-[75px]"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <span className="text-xs text-grey">
            {getPokemonDisplayedId(fromPokemonData.id)}
          </span>
          <span className="font-bold">{fromPokemonData.displayName}</span>
        </div>
      </div>

      <div className="jusitfy-center flex flex-col items-center gap-1">
        <LeftArrow className="h-6 w-6 rotate-180 text-grey/10" />
        {target.evolution_details.map((detail, index) => {
          return (
            // Index as key is clearly not optimal but should be ok here
            // as we don't re order the list. Also, have nothing really better
            <span key={index} className="text-center text-xs font-bold">
              {getEvolutionCondition(detail)}
            </span>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        <div className="relative flex items-center justify-center">
          <PokeballGreyPattern className="absolute h-[100px] w-[100px]" />

          <img
            src={getPokemonSprite(targetPokemonData.sprites)}
            className="relative h-[75px] w-[75px]"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <span className="text-xs text-grey">
            {getPokemonDisplayedId(targetPokemonData.id)}
          </span>
          <span className="font-bold">{targetPokemonData.displayName}</span>
        </div>
      </div>
    </>
  );
};
