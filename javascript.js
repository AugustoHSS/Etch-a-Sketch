
const grid = 32;
const gridContainer = document.getElementsByClassName("grid-container")[0]

gridContainer.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

for (let i = 0; i < grid * grid; i++) {
    const cell = document.createElement("div");

    cell.style.border = "1px solid black";
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#0000ff";
    });

    gridContainer.appendChild(cell);
}