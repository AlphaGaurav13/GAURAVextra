var video = document.getElementById("myVideo");

  function playPause() {
    if (video.paused)
      video.play();
    else
      video.pause();
  }

  function makeBig() {
    video.width = 560;
  }

  function makeSmall() {
    video.width = 320;
  }

  function makeNormal() {
    video.width = 420;
  }
