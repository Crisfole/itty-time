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

export type TimeUnit = keyof typeof units
export type TimeUnitPlural = `${TimeUnit}s`
export type TimeString = `${number} ${TimeUnit | TimeUnitPlural}`
