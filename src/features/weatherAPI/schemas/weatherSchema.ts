import { z } from 'zod';

export const weatherSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),

  current_units: z.object({
    time: z.string(),
    interval: z.string(),
    temperature_2m: z.string(),
    is_day: z.string(),
    weather_code: z.string(),
  }),
  current: z.object({
    time: z.string(),
    interval: z.number(),
    temperature_2m: z.number().nullable(),
    is_day: z.number(),
    weather_code: z.number(),
  }),

  hourly_units: z.object({
    time: z.string(),
    temperature_2m: z.string(),
    precipitation: z.string(),
    apparent_temperature: z.string(),
    wind_speed_10m: z.string(),
    wind_direction_10m: z.string(),
    cloud_cover: z.string(),
    pressure_msl: z.string(),
    weather_code: z.string(),
    wind_gusts_10m: z.string(),
  }),
  hourly: z.object({
    time: z.array(z.string()),
    temperature_2m: z.array(z.number().nullable()),
    precipitation: z.array(z.number().nullable()),
    apparent_temperature: z.array(z.number().nullable()),
    wind_speed_10m: z.array(z.number().nullable()),
    wind_direction_10m: z.array(z.number().nullable()),
    cloud_cover: z.array(z.number().nullable()),
    pressure_msl: z.array(z.number().nullable()),
    weather_code: z.array(z.number().nullable()),
    wind_gusts_10m: z.array(z.number().nullable()),
  }),

  daily_units: z.object({
    time: z.string(),
    weather_code: z.string(),
    temperature_2m_max: z.string(),
    temperature_2m_min: z.string(),
  }),
  daily: z.object({
    time: z.array(z.string()),
    weather_code: z.array(z.number().nullable()),
    temperature_2m_max: z.array(z.number().nullable()),
    temperature_2m_min: z.array(z.number().nullable()),
  }),
});

export type WeatherData = z.infer<typeof weatherSchema>;
