str => `File name: ${str.slice(str.lastIndexOf('\\') + 1, str.lastIndexOf('.'))}\nFile extension: ${str.slice(str.lastIndexOf('.') + 1)}`

//-------------------------------------(2------------------------------

function extractFile(str) {
  let bksIndex = str.lastIndexOf('\\')
  let extIndex = str.lastIndexOf('.')
  let name = str.slice(bksIndex + 1, extIndex)
  let ext = str.slice(extIndex + 1, )

  return `File name: ${name}\nFile extension: ${ext}`
}

// console.log(extractFile('C:\\Internal\\training-internal\\Template.bak.pptx'))
// console.log(extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs'))