import ExperimentBoard from "./js/ExperimentBoard.js";

const experimentBoard = new ExperimentBoard();
window.experimentBoard = experimentBoard;

ondragend = (event) => {
    const targetId = event.target.id;
    const element = document.getElementById(targetId);

    // Read the stored offsets
    const offsetX = parseFloat(event.target.dataset.offsetX) || 0;
    const offsetY = parseFloat(event.target.dataset.offsetY) || 0;

    // Calculate the new position with offsets
    const newLeft = event.clientX - offsetX;
    const newTop = event.clientY - offsetY;

    element.style.position = 'absolute'; // Ensure position is set
    element.style.left = newLeft + 'px';
    element.style.top = newTop + 'px';

    console.log(event.clientX + 'px', event.clientY + 'px');
}
