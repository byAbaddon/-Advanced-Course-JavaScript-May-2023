function softUniCourses(arr) {
  const obj = {}

  for (const token of arr) {
    if (token.includes(':')) {
      const [courseName, capacity] = token.split(': ')
      if (!obj[courseName]) obj[courseName] = {capacity: 0,students: []}
      obj[courseName].capacity += Number(capacity)
    } else if (token.includes('joins')) {
      const [user, , , email, , courseName] = token.split(' ')
      const [, student, credits] = user.match(/(\w+)\[(\d+)]/).map(x => isNaN(x) ? x : Number(x))

      if (obj[courseName] && obj[courseName].students.length < obj[courseName].capacity) {
        obj[courseName].students.push({username: student, email, credits})
      }
    }
  }

  const sortedCourses = Object.entries(obj).sort((a, b) => b[1].students.length - a[1].students.length)

  for (const [course, data] of sortedCourses) {
    console.log(`${course}: ${data.capacity - data.students.length} places left`)
    const sortedStudents = data.students.sort((a, b) => b.credits - a.credits)
    for (const student of sortedStudents) {
      console.log(`--- ${student.credits}: ${student.username}, ${student.email}`)
    }
  }
}

// softUniCourses([
//   'JavaBasics: 2',
//   'user1[25] with email user1@user.com joins C#Basics',
//   'C#Advanced: 3',
//   'JSCore: 4',
//   'user2[30] with email user2@user.com joins C#Basics',
//   'user13[50] with email user13@user.com joins JSCore',
//   'user1[25] with email user1@user.com joins JSCore',
//   'user8[18] with email user8@user.com joins C#Advanced',
//   'user6[85] with email user6@user.com joins JSCore',
//   'JSCore: 2',
//   'user11[3] with email user11@user.com joins JavaBasics',
//   'user45[105] with email user45@user.com joins JSCore',
//   'user007[20] with email user007@user.com joins JSCore',
//   'user700[29] with email user700@user.com joins JSCore',
//   'user900[88] with email user900@user.com joins JSCore'
// ])