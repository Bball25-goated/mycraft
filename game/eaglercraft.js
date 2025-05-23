// EaglercraftX 1.8.8 - Part 1
console.log("EaglercraftX is starting...");

function setupCanvas() {
  const canvas = document.getElementById("gameCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.font = "30px Arial";
  ctx.fillText("Loading Minecraft...", 50, 100);
}
window.onload = setupCanvas;
