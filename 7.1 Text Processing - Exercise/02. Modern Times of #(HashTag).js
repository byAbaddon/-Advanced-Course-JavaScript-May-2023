text => text.split(' ').forEach(x => /#[A-z]/.test(x) && console.log(x.slice(1)))

//--------------------------------------------(2)----------------------------------


function modernTimes(input) {
  for (const el of input.split(' '))
    if (el.match(/(#[A-z]+)/gim)) console.log(el.substring(1, ))
}

//modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')