const playBtn = document.getElementById('playBtn');
const lyricsWrapper = document.getElementById('lyricsWrapper');

const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#ddd',
  progressColor: '#ff006c',
  barWidth: 4,
  responsive: true,
  height: 90,
  barRadius: 4,
  loop: true
});

wavesurfer.load('/assets/sound/mybaby.mp3');

wavesurfer.on('finish', function() {
  wavesurfer.play();
});

playBtn.addEventListener('click', () => {
  if (wavesurfer.isPlaying()) {
    wavesurfer.pause();
    playBtn.src = '/assets/images/img_endShow/play.png';
    lyricsWrapper.classList.remove('showLyrics');
  } else {
    wavesurfer.play();
    playBtn.src = '/assets/images/img_endShow/pause.png';
    lyricsWrapper.classList.add('showLyrics');
  }
});

