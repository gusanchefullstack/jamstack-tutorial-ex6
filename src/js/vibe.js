const vibes = [
  "... and you are awesome! 😎",
  "... have a wonderful day! 🎈",
  "... you have got this 💪",
  "... code code code 💻!"
]

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];
document.querySelector(".vibe").append(vibe);
