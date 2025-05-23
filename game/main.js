// main.js - Minecraft Starter Engine
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let blocks = [];

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 16; x++) {
    blocks.push({ x: x * 40, y: canvas.height - (y + 1) * 40 });
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#87ceeb"; // sky
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#654321"; // dirt blocks
  for (let b of blocks) {
    ctx.fillRect(b.x, b.y, 40, 40);
  }

  requestAnimationFrame(draw);
}

draw();
