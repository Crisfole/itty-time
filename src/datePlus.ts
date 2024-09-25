import type { Duration } from 'lib/units'
import { ms } from './ms'

// FUNCTION: get future date from a duration string (e.g. datePlus('3 hours'))
export const datePlus = (duration: Duration | number, from = new Date): Date =>
  new Date(from.getTime() + ms(duration))
