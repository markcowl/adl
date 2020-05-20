import { Identity } from '../types';
import { Schema } from './schema';

export class Constraint extends Schema {
  constructor(public name: Identity, initializer?: Partial<Constraint>) {
    super('constraint');
    this.initialize(initializer);
  }
}

export class MinimumConstraint extends Constraint {
  constructor(public minimum: number, initializer?: Partial<MinimumConstraint>) {
    super('Minimum');
    this.initialize(initializer);
  }
}

export class MaximumConstraint extends Constraint {
  constructor(public maximum: number, initializer?: Partial<MaximumConstraint>) {
    super('Maximum');
    this.initialize(initializer);
  }
}
export class ExclusiveMinimumConstraint extends Constraint {
  constructor(public minimum: number, initializer?: Partial<ExclusiveMinimumConstraint>) {
    super('ExclusiveMinimum');
    this.initialize(initializer);
  }
}
export class ExclusiveMaximumConstraint extends Constraint {
  constructor(public maximum: number, initializer?: Partial<ExclusiveMaximumConstraint>) {
    super('ExclusiveMaximum');
    this.initialize(initializer);
  }
}

export class MultipleOfConstraint extends Constraint {
  constructor(public multipleOf: number, initializer?: Partial<MultipleOfConstraint>) {
    super('MultipleOf');
    this.initialize(initializer);
  }
}


export class ReadOnlyConstraint extends Constraint {
  constructor(public readOnly: boolean, initializer?: Partial<MaxLengthConstraint>) {
    super('ReadOnly');
    this.initialize(initializer);
  }
}

export class MaxLengthConstraint extends Constraint {
  constructor(public length: number, initializer?: Partial<MaxLengthConstraint>) {
    super('MaxLength');
    this.initialize(initializer);
  }
}
export class MinLengthConstraint extends Constraint {
  constructor(public length: number, initializer?: Partial<MinLengthConstraint>) {
    super('MinLength');
    this.initialize(initializer);
  }
}

export class RegularExpressionConstraint extends Constraint {
  constructor(public length: string, initializer?: Partial<RegularExpressionConstraint>) {
    super('RegularExpression');
    this.initialize(initializer);
  }
}

export class MaximumElementsConstraint extends Constraint {
  constructor(public count: number, initializer?: Partial<MaximumElementsConstraint>) {
    super('MaximumElements');
    this.initialize(initializer);
  }
}


export class MinimumElementsConstraint extends Constraint {
  constructor(public count: number, initializer?: Partial<MinimumElementsConstraint>) {
    super('MinimumElements');
    this.initialize(initializer);
  }
}

export class UniqueElementsConstraint extends Constraint {
  constructor(public unique: boolean, initializer?: Partial<UniqueElementsConstraint>) {
    super('UniqueElements');
    this.initialize(initializer);
  }
}

export class MinimumPropertiesConstraint extends Constraint {
  constructor(public count: number, initializer?: Partial<MinimumPropertiesConstraint>) {
    super('MinimumProperties');
    this.initialize(initializer);
  }
}

export class MaximumPropertiesConstraint extends Constraint {
  constructor(public count: number, initializer?: Partial<MaximumPropertiesConstraint>) {
    super('MaximumProperties');
    this.initialize(initializer);
  }
}
