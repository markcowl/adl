const visibility = new Map();
export function getVisibility(entity) {
  return visibility.get(entity);
}
export function v(c, t, v) {
  visibility.set(t, v);
}

const dm = new Map();
export function d(c, t, v) {
  dm.set(t, v);
}

export function inspectD(c, t) {
  console.log('docs for ' + t.name);
  for (const [name, prop] of t.properties) {
    console.log(name + ': ' + dm.get(prop));
  }
}

export function wv(c, t, v) {
  console.log('running wv on ', t);
  const filter = (_, prop) => {
    const vis = getVisibility(prop);
    return vis && vis !== v;
  }

  mapFilterOut(t.properties, filter);
}

function mapFilterOut(map, pred) {
  for (const [key, prop] of map) {
    if (pred(key, prop)) {
      map.delete(key);
    }
  }
}