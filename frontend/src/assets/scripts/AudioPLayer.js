const handlePlayError = (error) => {
  if (error instanceof DOMException && error.message.indexOf('pause()') > -1) {
    // Double clicked audio, pause() interferes with play()
    console.error(error);
  } else {
    console.log('Network error: No response. Try again.');
  }
};

const AudioPlayer = () => {
  let sound = new Audio();

  const playAudio = (id) => {
    sound.pause();
    sound = new Audio(`/api/sounds/${id}.mp3`);
    sound.volume = 0.7;
    sound.play().catch(handlePlayError);
  };

  return {
    playAudio,
  };
};

const audioPlayer = AudioPlayer();

export default audioPlayer;
