import { z } from 'zod';

export const weatherSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),
  minutely_15_units: z.object({
    time: z.string(),
    temperature_2m: z.string(),
  }),
  minutely_15: z.object({
    time: z.array(z.string()),
    temperature_2m: z.array(z.union([z.number(), z.null()])),
  }),
});

export type WeatherData = z.infer<typeof weatherSchema>;
