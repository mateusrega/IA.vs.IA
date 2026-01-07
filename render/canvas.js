const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const GRID_SIZE = 100;
let cellSize = 6;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cellSize = Math.floor(
    Math.min(canvas.width, canvas.height) / GRID_SIZE
  );
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// 🔹 Grid fake para visual inicial
const fakeGrid = [];
for (let y = 0; y < GRID_SIZE; y++) {
  fakeGrid[y] = [];
  for (let x = 0; x < GRID_SIZE; x++) {
    fakeGrid[y][x] = Math.random() < 0.48 ? 0 : 1;
  }
}

const COLORS = {
  0: "#1f3b5c",
  1: "#8b1e3f",
  neutral: "#222"
};

export function renderGrid(grid = fakeGrid) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      const owner = grid[y][x];
      ctx.fillStyle = COLORS[owner] || COLORS.neutral;
      ctx.fillRect(
        x * cellSize,
        y * cellSize,
        cellSize,
        cellSize
      );
    }
  }
}
