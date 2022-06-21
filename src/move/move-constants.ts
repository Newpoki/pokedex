export const moveQueryKeys = {
  base: ["move"],
  move: (moveNameOrId: string | undefined) => [...moveQueryKeys.base, moveNameOrId, "move"],
};
