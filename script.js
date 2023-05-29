function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`); //for animation
  if (!audio) return; //ses olmayan basqa keye basanda islemir

  audio.currentTime = 0; //ard arda eyni keye basanda sesi dayanmadan calmasi ucun
  audio.play();
  key.classList.add("playing");
  //   console.log(key);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //transform olmayanda secmesin
  this.classList.remove("playing");
  //   console.log(e.propertyName);
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
