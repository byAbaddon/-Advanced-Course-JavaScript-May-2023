arr => {
  const fav = arr.pop()
  for (let i = 1; i < arr.length; i++) {
    const [type, name] = arr[i].split('_')
    type == fav || fav == 'all' ? console.log(name) : null
  }
}

//----------------------------------------(2)------------------------------------

function songs(arr) {
  class Song {
    constructor(type, name, time) {
      this.type = type
      this.name = name
      this.time = time
    }
  }

  let typeOfSong = arr.pop()
  let songNumber = arr.shift()
  while (songNumber--) {
    const [type, name, time] = arr.shift().split('_')
    let  song = new Song(type, name, time)
    song.type == typeOfSong || typeOfSong =='all'? console.log(song.name) : null
  }
}

//songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])
//songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
