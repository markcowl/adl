import { fail } from 'assert';

export function assert(condition?: boolean): asserts condition {
  if (!condition) {
    fail();
  }
}
