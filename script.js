let displayItem = [
  "Heater-1",
  "Heater-2",
  "Heater-3",
  "Heater-4",
  "Clap",
  "Open HH",
  "Kick n' Hat",
  "Kick",
  "Closed HH",
];
let on = false;
let powerButton = document.getElementById("powerButton");
powerButton.onclick = function () {
  on = !on;
  if (on) {
    powerButton.innerText = "ON";
  } else {
    powerButton.innerText = "OFF";
  }
};

let volumeControl = document.getElementById("volumeControl");
let s1 = document.getElementById("Q");
let s2 = document.getElementById("W");
let s3 = document.getElementById("E");
let s4 = document.getElementById("A");
let s5 = document.getElementById("S");
let s6 = document.getElementById("D");
let s7 = document.getElementById("Z");
let s8 = document.getElementById("X");
let s9 = document.getElementById("C");
let display = document.getElementById("display");
function playQ() {
  if (on) {
    document.getElementById("pad1").classList.add("active");
    s1.play();
    display.innerText = displayItem[0];
    setTimeout(function () {
      document.getElementById("pad1").classList.remove("active");
    }, 500);
  }
}
function playW() {
  if (on) {
    s2.play();
    display.innerText = displayItem[1];
    document.getElementById("pad2").classList.add("active");
    setTimeout(function () {
      document.getElementById("pad2").classList.remove("active");
    }, 500);
  }
}
function playE() {
  if (on) {
    s3.play();
    display.innerText = displayItem[2];
    document.getElementById("pad3").classList.add("active");
    setTimeout(function () {
      document.getElementById("pad3").classList.remove("active");
    }, 500);
  }
}
function playA() {
  if (on) {
    s4.play();
    display.innerText = displayItem[3];
    document.getElementById("pad4").classList.add("active");
    setTimeout(function () {
      document.getElementById("pad4").classList.remove("active");
    }, 500);
  }
}
function playS() {
  if (on) {
    s5.play();
    display.innerText = displayItem[4];
    document.getElementById("pad5").classList.add("active");
    setTimeout(function () {
      document.getElementById("pad5").classList.remove("active");
    }, 500);
  }
}
function playD() {
  if (on) {
    display.innerText = displayItem[5];
    s6.play();
    document.getElementById("pad6").classList.add("active");
    setTimeout(function () {
      document.getElementById("pad6").classList.remove("active");
    }, 500);
  }
}
function playZ() {
  if (on) {
    display.innerText = displayItem[6];
    s7.play();
    document.getElementById("pad7").classList.add("active");
    setTimeout(function () {
      document.getElementById("pad7").classList.remove("active");
    }, 500);
  }
}
function playX() {
  if (on) {
    display.innerText = displayItem[7];
    s8.play();
    document.getElementById("pad8").classList.add("active");
    setTimeout(function () {
      document.getElementById("pad8").classList.remove("active");
    }, 500);
  }
}
function playC() {
  if (on) {
    display.innerText = displayItem[8];
    s9.play();
    document.getElementById("pad9").classList.add("active");
    setTimeout(function () {
      document.getElementById("pad9").classList.remove("active");
    }, 500);
  }
}

document.getElementById("pad1").onclick = playQ;
document.getElementById("pad2").onclick = playW;
document.getElementById("pad3").onclick = playE;
document.getElementById("pad4").onclick = playA;
document.getElementById("pad5").onclick = playS;
document.getElementById("pad6").onclick = playD;
document.getElementById("pad7").onclick = playZ;
document.getElementById("pad8").onclick = playX;
document.getElementById("pad9").onclick = playC;

function handleKeyPress(event) {
  if (on) {
    if (event.key === "q" || event.key === "Q") {
      playQ();
    } else if (event.key === "w" || event.key === "W") {
      playW();
    } else if (event.key === "e" || event.key === "E") {
      playE();
    } else if (event.key === "a" || event.key === "A") {
      playA();
    } else if (event.key === "s" || event.key === "S") {
      playS();
    } else if (event.key === "d" || event.key === "D") {
      playD();
    } else if (event.key === "z" || event.key === "Z") {
      playZ();
    } else if (event.key === "x" || event.key === "X") {
      playX();
    } else if (event.key === "C" || event.key === "c") {
      playC();
    }
  }
}
function handleVolumeChange() {
  let volume = volumeControl.value;
  let sounds = document.getElementsByClassName("clip");
  for (let i = 0; i < sounds.length; i++) {
    sounds[i].volume = volume;
  }
  display.innerText = "Volume : " + Math.floor(volume * 100);
}
document.addEventListener("keydown", handleKeyPress);
volumeControl.addEventListener("input", handleVolumeChange);
