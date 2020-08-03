// pretend I just typed this file from scratch... and saved it
import { description } from "../../lib/decorators.js";

export function fancyDescription(program, target, ...args) {
  args[0] = `<blink>${args[0]}</blink>`;
  description(program, target, ...args);
}

export function evenFancierDescription(program, target, ...args) {
  args[0] = `<marquee><blink>${args[0]}</blink></marquee>`;
  description(program, target, ...args);
}