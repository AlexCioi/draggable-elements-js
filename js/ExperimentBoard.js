import HtmlElement from "./HtmlElement.js";

class ExperimentBoard {

    items = [];

    addHtmlDiv = () => {
        const element = this.getNewHtmlDiv();

        console.log(element);

        document.body.appendChild(element);

        this.items.push(new HtmlElement(element.id, element.x, element.y));
    }

    getNewHtmlDiv = () => {
        let newElement = document.createElement('div');
        newElement.classList.add('simple-div')
        newElement.innerHTML = Math.floor(Math.random() * 10) + 1;
        newElement.draggable = true;

        newElement.id = 'draggable-div' + Math.floor(Math.random() * 10000);

        newElement.addEventListener('dragstart', (event) => {})
        newElement.addEventListener('dragend', (event) => {})

        ondragstart = (event) => {
            const rect = event.target.getBoundingClientRect();
            event.target.dataset.offsetX = event.clientX - rect.left;
            event.target.dataset.offsetY = event.clientY - rect.top;
        }

        return newElement;
    }
}

export default ExperimentBoard;
