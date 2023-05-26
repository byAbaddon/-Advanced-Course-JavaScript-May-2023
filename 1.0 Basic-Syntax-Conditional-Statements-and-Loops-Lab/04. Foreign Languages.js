lng => ['U', 'E'].includes(lng[0]) ? 'English' : ['A', 'S', 'M'].includes(lng[0]) ? 'Spanish' : 'unknown'
  
//------------------------(2)----------------------

function foreignLanguages(arg) {
  if (arg == 'USA' || arg =='England') return 'English'
  if (arg == 'Spain' || arg == 'Argentina' || arg == 'Mexico') return 'Spanish'
  return 'unknown'
}

//console.log(foreignLanguages('Germany'))
//console.log(foreignLanguages('USA')   )