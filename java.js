// Obtén referencia al elemento de audio
const audio = document.getElementById('myAudio');

// Función para reproducir o pausar la canción
function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Asigna la función toggleAudio al evento onClick del botón
const button = document.querySelector('.myButton button');
button.addEventListener('click', toggleAudio);