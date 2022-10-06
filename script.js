console.log("Welcome to my Music-player");

// Initializing Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Ram Siya Ram", filePath: "songs/1.mp3"},
    {songName: "Meethi Meethi Gallan", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Soja Zara- Baahubali 2", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Sia's Unstoppable", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Rangi Saari- Mrittika", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "BamBholle Laxmii", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Tera Hone Laga Hoon", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Kalank- Arijit Singh", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Memories", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg"},
    {songName: "Kun Faya Kun Atif Aslam", filePath: "songs/10.mp3", coverPath: "covers/10.jpeg"},
    {songName: "Girls Like You- Maroon 5", filePath: "songs/11.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Chaad Baaliyan", filePath: "songs/12.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Hamare Saath Shri Raghunath", filePath: "songs/13.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Tera Yaar Hun", filePath: "songs/14.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Hawayein", filePath: "songs/15.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Khairiyat", filePath: "songs/16.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Teri Mitti", filePath: "songs/17.mp3", coverPath: "covers/9.jpeg"},
    {songName: "Namo Namo", filePath: "songs/18.mp3", coverPath: "covers/10.jpeg"},
    {songName: "Soja Zara", filePath: "songs/19.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Ram Siya Ram", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=20){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
