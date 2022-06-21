export const itemQueryKeys = {
  base: ["item"],
  item: (itemNameOrId: string | undefined) => [...itemQueryKeys.base, itemNameOrId, "item"],
};
