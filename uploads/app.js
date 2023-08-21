const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 120;

const currentFrame = (index) => `./Blender Files/${(index + 1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

let animationFrame = 0;
let frameDelay = 30; // Adjust this value to slow down the animation (in milliseconds)

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[animationFrame], 0, 0);

  animationFrame = (animationFrame + 1) % frameCount; // Loop through frames
}

// Start the animation loop with the specified frame delay
function startAnimationLoop() {
  animate();
  setTimeout(startAnimationLoop, frameDelay);
}

// Start the animation loop when the first image is loaded
images[0].onload = () => {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;
  startAnimationLoop();
};