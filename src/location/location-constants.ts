export const locationQueryKeys = {
  base: ["location"],
  location: (locationNameOrId: string | undefined) => [
    ...locationQueryKeys.base,
    locationNameOrId,
    "location",
  ],
  locationArea: (locationAreaUrl: string | undefined) => [
    ...locationQueryKeys.base,
    locationAreaUrl,
    "locationArea",
  ],
};
