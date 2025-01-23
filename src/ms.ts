import { type DurationString, type DurationUnit, units } from './lib/units'

// FUNCTION: get number of seconds from a duration string
export const ms = (duration: DurationString | number): number => {
  if (+duration) return +duration
  // @ts-ignore
  const [, value, unit] = duration.match(/^([^ ]+) +(\w\w*?)s?$/) || []

  // Note: This `as` is safe because the `|| 1` handles missing units
  return +value * (units[unit as DurationUnit] || 1)
}
