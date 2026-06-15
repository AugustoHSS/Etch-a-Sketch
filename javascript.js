
const grid = 16;
const gridContainer = document.getElementsByClassName("grid-container")[0]

for (let y = 0; y < grid; y++) {
    const row = document.createElement("div");
    row.style.display = "flex";

    for (let x = 0; x < grid; x++) {
        const cell = document.createElement("div");

        cell.classList.add("cell");
        cell.style.width = "40px";
        cell.style.height = "40px";
        cell.style.border = "1px solid black";
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "#0000ff";
        })
        row.appendChild(cell);
    }

    gridContainer.appendChild(row);
}