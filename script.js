const music = new Audio('dafa.mp3');

const songs = [
    {
        id:'1',
        songName:` Tu Hai Kahan <br><div class="subtitle">AUR</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` ON MY WAY <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id:'3',
        songName:` Shiv Tandav <br>
        <div class="subtitle">ananya basu</div>`,
        poster: "img/3.jpg"
    },
    {
        id:'4',
        songName:` NeeleNeele Ambar <br>
        <div class="subtitle">Kishore Kumar</div>`,
        poster: "img/4.jpg"
    },
    {
        id:'5',
        songName:` Light Switch <br>
        <div class="subtitle">charlie puth</div>`,
        poster: "img/5.jpg"
    },
    {
        id:'6',
        songName:` Kya Khoob <br>
        <div class="subtitle">Mukesh</div>`,
        poster: "img/6.jpg"
    },
    {
        id:'7',
        songName:` GOAT <br>
        <div class="subtitle">Sidhu Moose wala</div>`,
        poster: "img/7.jpg"
    },
    {
        id:'8',
        songName:` Dil Luteya <br>
        <div class="subtitle">Jazzy B</div>`,
        poster: "img/8.jpg"
    },
    {
        id:'9',
        songName:` Aarambh He <br>
        <div class="subtitle">Piyush Mishra, Rahul Ram</div>`,
        poster: "img/9.jpg"
    },
    {
        id:'10',
        songName:` Prem Ki Naiya <br>`,
        poster: "img/10.jpg"
    },
    {
        id:'11',
        songName:` Guzarish<br>
        <div class="subtitle">javed alir</div>`,
        poster: "img/11.jpg"
    },
    {
        id:'12',
        songName:` Falak Tak <br>
        <div class="subtitle">various artist</div>`,
        poster: "img/12.jpg"
    },
    {
        id:'13',
        songName:` Light Switch <br>
        <div class="subtitle">charlie puth</div>`,
        poster: "img/5.jpg"
    },
    {
        id:'14',
        songName:` Light Switch <br>
        <div class="subtitle">charlie puth</div>`,
        poster: "img/5.jpg"
    },
    {
        id:'15',
        songName:` Light Switch <br>
        <div class="subtitle">charlie puth</div>`,
        poster: "img/5.jpg"
    },
    {
        id:'16',
        songName:` Light Switch <br>
        <div class="subtitle">charlie puth</div>`,
        poster: "img/5.jpg"
    },
    {
        id:'17',
        songName:` Light Switch <br>
        <div class="subtitle">charlie puth</div>`,
        poster: "img/5.jpg"
    },
    {
        id:'18',
        songName:` Light Switch <br>
        <div class="subtitle">charlie puth</div>`,
        poster: "img/5.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPLay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');

    }
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

    })
})