import { renderGrid } from "./render/canvas.js";
import { updateHUD } from "./render/hud.js";

let turn = 0;

function loop() {
  turn++;
  renderGrid();
  updateHUD(turn, "Simulação visual");

  setTimeout(loop, 500);
}

loop();
