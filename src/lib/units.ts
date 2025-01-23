const
  second = 1e3,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  week = day * 7,
  month = day * 30,
  year = day * 365.25

export const units = {
  year,
  month,
  week,
  day,
  hour,
  minute,
  second,
  m: 1,
} as const

export type DurationUnit = keyof typeof units
export type DurationUnitPlural = `${DurationUnit}s`
export type DurationString =
  | `${number}`
  | `${number} ${DurationUnit | DurationUnitPlural}`
