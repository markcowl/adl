import * as chalk from 'chalk';

export class Errors {
  errors = new Array<Error>();
  get summary() {
    return chalk.yellow(this.errors.map(each => `- ${each.message}`).join('\n      '));

  }
  get count() {
    return this.errors.length;
  }
  check(assertion: () => void) {
    try {
      assertion();
    } catch (err) {
      this.errors.push(err);
    }
  }
}
