const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const musices = [
  {
    song: "https://www.youtube.com/watch?v=wfkGR6PlWDk",
    singer: "Jake Miller - Rumors",
  },
  {
    song: "https://www.youtube.com/watch?v=Som-HtQmRV0",
    singer: "Chris James - Hey It's Me",
  },
  {
    song: "https://www.youtube.com/watch?v=fx227oTnnPc",
    singer: "Love Lee - AKMU",
  },
  {
    song: "https://www.youtube.com/watch?v=ZlDDiHK4tQM",
    singer: "후라이의 꿈 (Fry’s Dream) - AKMU",
  },
  {
    song: "https://www.youtube.com/watch?v=a7GITgqwDVg",
    singer: "Charlie Puth - Left And Right",
  },
  {
    song: "https://www.youtube.com/watch?v=WFsAon_TWPQ",
    singer: "Charlie Puth - Light Switch",
  },
  {
    song: "https://www.youtube.com/watch?v=X4Q7d0CtYyk",
    singer: "FKJ & Tom Misch - Losing My Way",
  },
  {
    song: "https://www.youtube.com/watch?v=M1N_wbhAfQ4",
    singer: "Tom Misch - It Runs Through Me",
  },
  {
    song: "https://www.youtube.com/watch?v=QBL2m1PNqJM",
    singer: "Tom Misch - Lost In Paris",
  },
  {
    song: "https://www.youtube.com/watch?v=4QLYXPto0w4",
    singer: "Tom Misch - Beautiful Escape",
  },
];

const todayMusic = document.querySelector("div#music a");
const music = musices[Math.floor(Math.random() * musices.length)];
todayMusic.href = music.song;
todayMusic.innerText = "오늘의 음악:" + music.singer;

const body = document.querySelector("body");
const image = images[Math.floor(Math.random() * images.length)];
body.style.backgroundImage = `url("img/${image}")`;
