export default flatten

function flatten(arr) {
  return arr.reduce(function flattenReducer(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
// I'd like to understand what happens when I push my PR up, rename my branch,
// then push again.
  }, [])
}

