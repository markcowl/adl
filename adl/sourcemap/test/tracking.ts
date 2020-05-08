import { describe, it } from 'mocha';
import { Path } from '../exports';
import { Origin, TrackedSource, TrackedTarget } from '../proxies';
require('source-map-support').install();

const src = {
  name: 'garrett',
  age: 21,
  address: {
    street: '123 anywhere street',
    city: 'Saskatoon',
    postal: 'S7L 4R7'
  }
};

describe('can track source/destinations', () => {
  it('simple', () => {
    const tracker = {
      add: (inTarget: Path, inSource: Origin) => {
        if (!inSource) {
          console.log(`Skipping add for ${inTarget.join('/')} because I don't know the source`);
        } else {
          console.log(`adding ${inTarget.join('/')} => /${inSource.path.join('/')}`);
        }
      }
    };

    const actual = {
      msg: 'this is the dest'
    };
    const origin = TrackedSource.track(src, src, { sourceFile: { filename: 'test.yaml' }, path: [] });
    const dest = <any>TrackedTarget.track(actual, [], tracker);

    const me = <any>{};
    const tme = TrackedTarget.track(me, []);
    tme['##Origin'] = { sourceFile: 'gws', path: [] };

    me.name = origin.name;
    me.years = origin.age;

    //dest.something = me;


    dest.people = [];


    dest.people.push(me);
  });
});