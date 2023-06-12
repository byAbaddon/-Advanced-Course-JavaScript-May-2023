function browserHistory(obj, commands) {
    for (let token of commands) {
        let [action, name] = token.split(' ')
        if (action == 'Open') {
            obj['Open Tabs'].push(name)
            obj['Browser Logs'].push(token)
        } else if (action == 'Close' && obj['Open Tabs'].includes(name)) {
            obj['Open Tabs'] = obj['Open Tabs'].filter(x => x != name)
            obj['Recently Closed'].push(name)
            obj['Browser Logs'].push(token)
        } else if (action == 'Clear') {
            obj['Open Tabs'] = []
            obj['Recently Closed'] = []
            obj['Browser Logs'] = []
        }
    }

    console.log(obj['Browser Name'])
    delete obj['Browser Name']

    for (let key in obj) {
        if (obj[key].length > 0) {
            console.log(`${key}: ${obj[key].join(', ')}`)
        } else {
            console.log(`${key}:`)
        }
    }
}

// browserHistory({
//         'Browser Name': 'Google Chrome',
//         'Open Tabs': ['Facebook', 'YouTube', 'Google Translate'],
//         'Recently Closed': ['Yahoo', 'Gmail'],
//         'Browser Logs': ['Open YouTube', 'Open Yahoo', 'Open Google Translate', 'Close Yahoo', 'Open Gmail', 'Close Gmail', 'Open Facebook']
//     },
//     ['Close Facebook', 'Open StackOverFlow', 'Open Google'])