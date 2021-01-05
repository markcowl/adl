import { suite, test } from '@testdeck/mocha';
import { equal } from 'assert';
import { normalizeIdentifier, normalizeMemberName } from '../support/codegen';

@suite class TestIdentifierNormalization {
  @test 'normalize member name'() {
    equal(normalizeMemberName('$x'), '$x');
    equal(normalizeMemberName('if'), 'if');
    equal(normalizeMemberName('a b c'), '"a b c"');
    equal(normalizeMemberName('a$"\'\r\nb'), '"a$\\"\'\\r\\nb"');
  }

  @test 'normalize identifier'() {
    equal(normalizeIdentifier('$x'), '$x');
    equal(normalizeIdentifier('if'), '_if');
    equal(normalizeIdentifier('a b c'), 'a_b_c');
    equal(normalizeIdentifier('AaZz1$\nb'), 'AaZz1$_b');
    equal(normalizeIdentifier('1abc'), '_1abc');
  }
}
