import type { DurationString } from 'lib/units'
import { ms } from './ms'

export const seconds = (duration: DurationString | number): number =>
  ms(duration) / 1000
