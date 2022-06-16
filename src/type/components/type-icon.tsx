import { memo } from "react";
import { ReactComponent as Bug } from "../../icons/bug.svg";
import { ReactComponent as Dark } from "../../icons/bug.svg";
import { ReactComponent as Dragon } from "../../icons/bug.svg";
import { ReactComponent as Electric } from "../../icons/bug.svg";
import { ReactComponent as Fairy } from "../../icons/bug.svg";
import { ReactComponent as Fighting } from "../../icons/bug.svg";
import { ReactComponent as Fire } from "../../icons/bug.svg";
import { ReactComponent as Flying } from "../../icons/bug.svg";
import { ReactComponent as Ghost } from "../../icons/bug.svg";
import { ReactComponent as Grass } from "../../icons/bug.svg";
import { ReactComponent as Ground } from "../../icons/bug.svg";
import { ReactComponent as Ice } from "../../icons/bug.svg";
import { ReactComponent as Normal } from "../../icons/bug.svg";
import { ReactComponent as Poison } from "../../icons/bug.svg";
import { ReactComponent as Psychic } from "../../icons/bug.svg";
import { ReactComponent as Rock } from "../../icons/bug.svg";
import { ReactComponent as Steel } from "../../icons/bug.svg";
import { ReactComponent as Water } from "../../icons/bug.svg";
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
