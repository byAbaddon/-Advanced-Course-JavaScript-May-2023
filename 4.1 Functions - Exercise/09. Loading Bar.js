n => n < 100 ? `${n}% [${'%'.repeat(n / 10)}${'.'.repeat(10 - n / 10)}]\nStill loading...` : `100% Complete!\n[${"%".repeat(10)}]`

//-----------------------------(2)----------------------------

function loadingBar(num) {
  let pr = "%".repeat(num / 10);
  let dot = ".".repeat(10 - num / 10);

  return num / 100 !== 1 ? `${num}% [${pr}${dot}]\nStill loading...` : `100% Complete!\n[${pr}]`
}

//console.log(loadingBar(30))
//console.log(loadingBar(100))