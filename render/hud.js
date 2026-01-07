const turnEl = document.getElementById("turn");
const infoEl = document.getElementById("info");

export function updateHUD(turn, info = "") {
  turnEl.textContent = `Turno: ${turn}`;
  infoEl.textContent = info;
}
