function removeOccurrences(pattern, word) {
  while (word.includes(pattern)) {
    word = word.replace(pattern, '')
  }

  return word
}

// console.log(removeOccurrences('ice', 'kicegiciceeb'))