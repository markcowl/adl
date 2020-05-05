export class Stopwatch {
  start: number;
  last: number;
  constructor() {
    this.last = this.start = process.uptime() * 1000;
  }
  get time() {
    const now = process.uptime() * 1000;
    const result = Math.floor(now - this.last);
    this.last = now;
    return result;
  }
  get total() {
    const now = process.uptime() * 1000;
    return Math.floor(now - this.start);
  }
}