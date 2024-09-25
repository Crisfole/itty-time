import type { Duration } from 'lib/units'
import { ms } from './ms'

export const seconds = (duration: Duration | number): number =>
  ms(duration) / 1000
