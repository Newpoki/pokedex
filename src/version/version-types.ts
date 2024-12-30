import { Name, NamedAPIRessource } from "@/api/api-types";

export type Version = {
  /** The identifier for this resource. */
  id: number;

  /** The name for this resource. */
  name: string;

  /** The name of this resource listed in different languages. */
  names: Name[];

  /** The version group this version belongs to. */
  version_group: NamedAPIRessource;
};
