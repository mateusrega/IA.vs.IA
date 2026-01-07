export const GRID_SIZE = 100;

// Cada célula: owner, strength
export function createGrid() {
  const grid = new Array(GRID_SIZE * GRID_SIZE);

  for (let i = 0; i < grid.length; i++) {
    grid[i] = {
      owner: -1,     // -1 = neutro
      strength: 0
    };
  }

  return grid;
}

// Conversão (x,y) → índice
export function idx(x, y) {
  return y * GRID_SIZE + x;
}

export function inBounds(x, y) {
  return x >= 0 && y >= 0 && x < GRID_SIZE && y < GRID_SIZE;
}
