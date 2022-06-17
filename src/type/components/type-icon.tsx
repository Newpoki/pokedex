import { memo } from "react";
import { ReactComponent as Bug } from "../../icons/bug.svg";
import { ReactComponent as Dark } from "../../icons/dark.svg";
import { ReactComponent as Dragon } from "../../icons/dragon.svg";
import { ReactComponent as Electric } from "../../icons/electric.svg";
import { ReactComponent as Fairy } from "../../icons/fairy.svg";
import { ReactComponent as Fighting } from "../../icons/fighting.svg";
import { ReactComponent as Fire } from "../../icons/fire.svg";
import { ReactComponent as Flying } from "../../icons/flying.svg";
import { ReactComponent as Ghost } from "../../icons/ghost.svg";
import { ReactComponent as Grass } from "../../icons/grass.svg";
import { ReactComponent as Ground } from "../../icons/ground.svg";
import { ReactComponent as Ice } from "../../icons/ice.svg";
import { ReactComponent as Normal } from "../../icons/normal.svg";
import { ReactComponent as Poison } from "../../icons/poison.svg";
import { ReactComponent as Psychic } from "../../icons/psychic.svg";
import { ReactComponent as Rock } from "../../icons/rock.svg";
import { ReactComponent as Steel } from "../../icons/steel.svg";
import { ReactComponent as Water } from "../../icons/water.svg";
import { PokemonTypeName } from "../../pokemon/typings";

type TypeIconProps = {
  className?: string;
  typeName: PokemonTypeName;
};

export const TypeIcon = memo(({ className, typeName }: TypeIconProps) => {
  switch (typeName) {
    case "bug":
      return <Bug className={className} />;
    case "dark":
      return <Dark className={className} />;
    case "dragon":
      return <Dragon className={className} />;
    case "electric":
      return <Electric className={className} />;
    case "fairy":
      return <Fairy className={className} />;
    case "fighting":
      return <Fighting className={className} />;
    case "fire":
      return <Fire className={className} />;
    case "flying":
      return <Flying className={className} />;
    case "ghost":
      return <Ghost className={className} />;
    case "grass":
      return <Grass className={className} />;
    case "ground":
      return <Ground className={className} />;
    case "ice":
      return <Ice className={className} />;
    case "normal":
      return <Normal className={className} />;
    case "poison":
      return <Poison className={className} />;
    case "psychic":
      return <Psychic className={className} />;
    case "rock":
      return <Rock className={className} />;
    case "steel":
      return <Steel className={className} />;
    case "water":
      return <Water className={className} />;
  }
});
