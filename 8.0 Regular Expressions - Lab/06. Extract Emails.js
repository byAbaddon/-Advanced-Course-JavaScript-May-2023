function extractEmails(text) {
  let pattern = /(?<=\s)([A-Za-z\d]+[\.\-\_]?[A-Za-z\d]+)+@\w+\-?\w+(\.\w+\-?\w+)+\b/gm
  let result = text[0].match(pattern)
  if (result != null) result.forEach(el => console.log(el))  
}

//extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'])