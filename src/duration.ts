import { units } from './lib/units'

type DurationOptions = {
  parts?: number
  join?: string | false
}

type UnformattedDurationSegment = [ unit: string, value: number ]

type DurationType = (
  milliseconds: number,
  options?: DurationOptions
) => string | UnformattedDurationSegment[]

export const duration: DurationType = (
  ms: number,
  {
    parts = 9,
    join = ', ',
  }: DurationOptions = {},
) => {
  let count, result: [string, number][] = []
  for (let [unit, value] of Object.entries(units)) {
    if (ms > value && parts) {
      ms -= (count = ms / value | 0) * value
      if (unit == 'second') count += ms / 1e3
      if (count > 1) unit += 's'
      // @ts-ignore
      result.push(join ? (count + ' ' + unit) : [unit, count])
      parts--
    }
  }

  return join
  ? result.join(join)
  : result
}