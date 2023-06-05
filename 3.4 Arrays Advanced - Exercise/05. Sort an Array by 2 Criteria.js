arr => arr.sort((a, b) =>  a.length ^ b.length ? a.length - b.length : a.localeCompare(b)).join('\n')
//---------------------------(2)----------------------

function sortAnArrayBy2Criteria(arr) {
  return arr.sort((a, b) => a.length != b.length ? a.length - b.length : a.localeCompare(b)).join('\n')
}

// console.log(sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]))
// console.log(sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default', ]))