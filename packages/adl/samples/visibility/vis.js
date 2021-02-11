const visibility = new Map();
export function getVisibility(entity) {
  return visibility.get(entity);
}
export function v(c, t, v) {
  visibility.set(t, v);
}

export function wv(c, t, v) {
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