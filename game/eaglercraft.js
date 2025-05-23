// EaglercraftX 1.8.8 - Part 3
console.log("EaglercraftX is starting...");

function setupCanvas() {
  const canvas = document.getElementById("gameCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#1d1d1d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Title and loading bar
  ctx.fillStyle = "#ffffff";
  ctx.font = "28px Arial";
  ctx.fillText("Launching Minecraft 1.8.8...", 50, 60);

  let progress = 0;
  let interval = setInterval(() => {
    ctx.fillStyle = "#444";
    ctx.fillRect(50, 100, 400, 30);
    ctx.fillStyle = "#3fcf4c";
    ctx.fillRect(50, 100, progress * 4, 30);
    ctx.fillStyle = "#fff";
    ctx.font = "18px Arial";
    ctx.fillText(`Loading... ${progress}%`, 50, 150);

    progress += 1;
    if (progress > 100) {
      clearInterval(interval);
      launchFakeMinecraft(ctx);
    }
  }, 50);
}

function launchFakeMinecraft(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#00ff00";
  ctx.font = "32px Arial";
  ctx.fillText("Minecraft Started (demo)", 100, 100);
  ctx.font = "20px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("This is a placeholder. Game core coming soon!", 100, 150);
}

window.onload = setupCanvas;
