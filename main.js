import { createGrid } from "./core/grid.js";
import { seedGrid } from "./core/init.js";
import { renderGrid } from "./render/canvas.js";
import { updateHUD } from "./render/hud.js";

const grid = createGrid();
seedGrid(grid);

let turn = 0;

function loop() {
  turn++;

  // 🔹 Por enquanto só render
  renderGrid(grid);
  updateHUD(turn, "Grid real ativo");

  setTimeout(loop, 400);
}

loop();
