import { LanguageName } from "../../common/typings";
import { useFetchMove } from "./use-fetch-move";

type UseGetLocalizedMoveName = {
  moveNameOrId: string | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedMoveName = ({
  moveNameOrId,
  languageName = "en",
}: UseGetLocalizedMoveName) => {
  const { data: move, ...others } = useFetchMove(moveNameOrId);

  const localizedMoveName = move?.names.find((moveName) => moveName.language.name === languageName);

  return { ...others, data: localizedMoveName };
};
