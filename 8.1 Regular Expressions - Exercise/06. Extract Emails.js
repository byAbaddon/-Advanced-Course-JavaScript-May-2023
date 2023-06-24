function extractEmails(text) {
  let pattern = /(?<=\s)([a-z\d]+[\.\-\_]?[a-z\d]+)+@\w+\-?\w+(\.\w+\-?\w+)+\b/gm
  let result = text.toString().match(pattern)
  if (result != null) {
    for (const el of result) {
      console.log(el)
    }
  }
}

//extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')

