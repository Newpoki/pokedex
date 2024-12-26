import BugIcon from "@/assets/types/bug.svg";
import DarkIcon from "@/assets/types/dark.svg";
import DragonIcon from "@/assets/types/dragon.svg";
import ElectricIcon from "@/assets/types/electric.svg";
import FairyIcon from "@/assets/types/fairy.svg";
import FightingIcon from "@/assets/types/fighting.svg";
import FireIcon from "@/assets/types/fire.svg";
import FlyingIcon from "@/assets/types/flying.svg";
import GhostIcon from "@/assets/types/ghost.svg";
import GrassIcon from "@/assets/types/grass.svg";
import GroundIcon from "@/assets/types/ground.svg";
import IceIcon from "@/assets/types/ice.svg";
import NormalIcon from "@/assets/types/normal.svg";
import PoisonIcon from "@/assets/types/poison.svg";
import PsychicIcon from "@/assets/types/psychic.svg";
import RockIcon from "@/assets/types/rock.svg";
import SteelIcon from "@/assets/types/steel.svg";
import WaterIcon from "@/assets/types/water.svg";
import { TypeName } from "./type-types";

const mapping: Record<
  TypeName,
  React.FunctionComponent<React.SVGAttributes<SVGElement>>
> = {
  bug: BugIcon,
  dark: DarkIcon,
  dragon: DragonIcon,
  electric: ElectricIcon,
  fairy: FairyIcon,
  fighting: FightingIcon,
  fire: FireIcon,
  flying: FlyingIcon,
  ghost: GhostIcon,
  grass: GrassIcon,
  ground: GroundIcon,
  ice: IceIcon,
  normal: NormalIcon,
  poison: PoisonIcon,
  psychic: PsychicIcon,
  rock: RockIcon,
  steel: SteelIcon,
  water: WaterIcon,
} as const;

type TypeIconProps = {
  className?: string;
  name: TypeName;
};

export const TypeIcon = ({ className, name }: TypeIconProps) => {
  const Icon = mapping[name];

  return <Icon className={className} />;
};
