interface Point {
    x: number,
    y: number
}

interface Style {
    top: number,
    right: number
}

const APP_ELEMENT = document.getElementById('app');

const createPoint = (event: MouseEvent): Point => {
    return { x: event.pageX, y: event.pageY }
}

const createImageElement = (src: string): HTMLImageElement => {
    const element = new Image(80, 80);
    element.src = src;
    return element;
}

const generateElement = (point: Point): HTMLElement => {
    const element = createImageElement('./js.svg');
    element.setAttribute('style', `top: ${point.y}px; left: ${point.x}px`);
    return element;
}

const renderElement = (element: HTMLElement): void => {
    APP_ELEMENT?.appendChild(element);
} 

const track = (event: MouseEvent): void => {
    const point: Point = createPoint(event);
    const element = generateElement(point);
    renderElement(element);
}

const clean = (): void => {
    while (APP_ELEMENT?.firstChild) {
        APP_ELEMENT.removeChild(APP_ELEMENT.firstChild)
    }
}

document.addEventListener("mousemove", track)
document.addEventListener("dblclick", clean)