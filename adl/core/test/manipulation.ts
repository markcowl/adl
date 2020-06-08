import { suite, test } from '@testdeck/mocha';
import * as assert from 'assert';
import { Node } from 'ts-morph';
import { ApiModel } from '../model/api-model';
import { TSElement } from '../model/element';
import { createEnum, EnumValue } from '../model/schema/enum';

@suite class TestManipulation {
  @test 'Manipulate enum'() {
    const model = new ApiModel();

    const e = createEnum(model, 'TestEnum', []);
    this.assertSourceEqual(e,
      `export enum TestEnum {
      }`);

    const values: Array<EnumValue> = [
      { name: 'First', value: 1, description: 'The first value' },
      { name: 'Second', value: 2, description: 'The second value' },
    ];
    e.values.push(...values);
    this.assertEnumValuesEqual(e.values.get(), values);

    this.assertSourceEqual(e,
      `export enum TestEnum {
          /** The first value */
          First = 1,
          /** The second value */
          Second = 2
        }`);

    e.values.remove(e.values.get()[0]);
    this.assertSourceEqual(e,
      `export enum TestEnum {
          /** The second value */
          Second = 2
      }`);

    this.assertEnumValuesEqual(e.values.get(), [values[1]]);

    e.description = 'This is a description';
    e.summary = 'This is a summary';
    e.name = 'RenamedEnum';
    e.extensible = true;

    this.assertSourceEqual(e.summary, 'This is a summary');
    this.assertSourceEqual(e.description, 'This is a description');
    assert.strictEqual(e.name, 'RenamedEnum');
    assert.strictEqual(e.extensible, true);

    this.assertSourceEqual(e,
      `/**
        * This is a summary
        * @description This is a description
        * @extensible
        */
      export enum RenamedEnum {
          /** The second value */
          Second = 2
      }`);
  }

  private assertEnumValuesEqual(actual: Array<EnumValue>, expected: Array<EnumValue>) {
    assert.strictEqual(actual.length, expected.length);
    for (let i = 0; i < actual.length; i++) {
      assert.strictEqual(actual[i].name, expected[i].name);
      assert.strictEqual(actual[i].value, expected[i].value);
      assert.strictEqual(actual[i].description, expected[i].description);
    }
  }

  private assertSourceEqual<T extends Node>(actual: TSElement<T> | string, expected: string) {
    if (typeof actual !== 'string') {
      actual = actual.node.getFullText();
    }
    const actualText = this.normalizeWhitespace(actual);
    const expectedText = this.normalizeWhitespace(expected);
    assert.strictEqual(actualText, expectedText);
  }

  private normalizeWhitespace(text: string) {
    return text.trim().replace(/\s+/g, ' ');
  }
}