export const weatherKeys = {
  all: ['weather'] as const,
  byLocation: (latitude: number, longitude: number) =>
    [...weatherKeys.all, latitude, longitude] as const,
};
