const myButton2 = document.getElementById('myButton2');
const audio = new Audio('Piero');
let isPlaying = false;

myButton2.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el botón envíe el formulario
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
});
