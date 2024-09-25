import { Duration, units } from './lib/units'

// FUNCTION: get number of seconds from a duration string
export const ms = (duration: Duration | number): number => {
  if (+duration) return +duration
  // @ts-ignore
  const [, value, unit] = duration.match(/^([^ ]+) +(\w\w*?)s?$/) || []

  return +value * (units[unit as keyof typeof units] || 1)
}
