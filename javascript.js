const gridContainer = document.getElementsByClassName("grid-container")[0];
const sketchSize = document.getElementById("sketchSize");
const sketchSizeText = document.getElementById("sketchSizeText")

function createGrid(size) {
    gridContainer.innerHTML = "";

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");

        cell.style.border = "1px solid black";

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "#0000ff";
        });

        gridContainer.appendChild(cell);
    }
}

createGrid(Number(sketchSize.value));

sketchSize.addEventListener("input", (e) => {
    createGrid(Number(e.target.value));
    sketchSizeText.textContent = `${e.target.value} X ${e.target.value}`
});