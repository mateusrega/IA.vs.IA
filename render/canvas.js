import { GRID_SIZE } from "../core/grid.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let cellSize = 5;
let imageData;

const COLORS = {
  "-1": [30, 30, 30, 255],   // neutro
  "0": [40, 120, 200, 255], // IA 0
  "1": [200, 60, 80, 255]   // IA 1
};

function resize() {
  cellSize = Math.floor(
    Math.min(window.innerWidth, window.innerHeight) / GRID_SIZE
  );

  canvas.width = GRID_SIZE * cellSize;
  canvas.height = GRID_SIZE * cellSize;

  imageData = ctx.createImageData(canvas.width, canvas.height);
}

window.addEventListener("resize", resize);
resize();

export function renderGrid(grid) {
  const data = imageData.data;

  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      const cell = grid[y * GRID_SIZE + x];
      const color = COLORS[cell.owner];

      for (let py = 0; py < cellSize; py++) {
        for (let px = 0; px < cellSize; px++) {
          const i =
            ((y * cellSize + py) * canvas.width +
             (x * cellSize + px)) * 4;

          data[i]     = color[0];
          data[i + 1] = color[1];
          data[i + 2] = color[2];
          data[i + 3] = color[3];
        }
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);
}
