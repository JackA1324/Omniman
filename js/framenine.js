let bgVideo;
let myFont;
let videoStarted = false;

function preload() {
  bgVideo = createVideo('img/Sequence 07.mp4');
  myFont = loadFont('font/KdamThmorPro-Regular.ttf');
  sound1 = loadSound('sound/1.mp3');
  sound2 = loadSound('sound/2.mp3');
}

function keyPressed() {
  if (key === 'q' || key === 'Q') {
    if (sound1 && !sound1.isPlaying()) {
      sound1.play();
    }
  } else if (key === 'w' || key === 'W') {
    if (sound2 && !sound2.isPlaying()) {
      sound2.play();
    }
  }
}

function setup() {
  createCanvas(1440, 1024);
  bgVideo.hide();
  bgVideo.volume(0.3); // Set volume properly
  textFont(myFont);
  textSize(64);
  textAlign(CENTER, CENTER);
  fill(255);
}

function draw() {
  background(0);
  if (videoStarted) {
    image(bgVideo, 0, 0, width, height);
  } else {
    text("Can He?\nWhat About His Mission\nCan He Sacrafice His Mission For His Family?\nFor His Son?", width / 2, height / 2);
  }
}

function mousePressed() {
  if (!videoStarted) {
    bgVideo.play();
    videoStarted = true;
  }
}
