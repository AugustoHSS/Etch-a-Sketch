
const grid = 16;
const gridContainer = document.getElementsByClassName("grid-container")[0]

for (let y = 0; y < grid; y++) {
    const row = document.createElement("div");
    row.style.display = "flex";

    for (let x = 0; x < grid; x++) {
        const cell = document.createElement("div");

        cell.style.width = "40px";
        cell.style.height = "40px";
        cell.style.border = "1px solid black";
        cell.style.cursor = "pointer"
        row.appendChild(cell);
    }

    gridContainer.appendChild(row);
}