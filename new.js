function Rectangle(topLeft, bottomRight) {
    this.topLeft = topLeft;       
    this.bottomRight = bottomRight; 
}
function displayRectangleInfo(rect) {
    console.log(`Top-left point: (${rect.topLeft.x}, ${rect.topLeft.y})`);
    console.log(`Bottom-right point: (${rect.bottomRight.x}, ${rect.bottomRight.y})`);
}

function getWidth(rect) {
    return rect.bottomRight.x - rect.topLeft.x;
}

function getHeight(rect) {
    return rect.bottomRight.y - rect.topLeft.y;
}

function getArea(rect) {
    return getWidth(rect) * getHeight(rect);
}

function getPerimeter(rect) {
    return 2 * (getWidth(rect) + getHeight(rect));
}

function changeWidth(rect, deltaWidth) {
    rect.bottomRight.x += deltaWidth;
}

function changeHeight(rect, deltaHeight) {
    rect.bottomRight.y += deltaHeight;
}

function changeWidthHeight(rect, deltaWidth, deltaHeight) {
    rect.bottomRight.x += deltaWidth;
    rect.bottomRight.y += deltaHeight;
}

function shiftX(rect, deltaX) {
    rect.topLeft.x += deltaX;
    rect.bottomRight.x += deltaX;
}

function shiftY(rect, deltaY) {
    rect.topLeft.y += deltaY;
    rect.bottomRight.y += deltaY;
}

function shiftXY(rect, deltaX, deltaY) {
    shiftX(rect, deltaX);
    shiftY(rect, deltaY);
}

function isPointInside(rect, point) {
    return point.x >= rect.topLeft.x &&
           point.x <= rect.bottomRight.x &&
           point.y >= rect.topLeft.y &&
           point.y <= rect.bottomRight.y;
}

const rect = new Rectangle({x: 1, y: 2}, {x: 6, y: 7});
displayRectangleInfo(rect);
console.log("Width:", getWidth(rect));
console.log("Height:", getHeight(rect));
console.log("Area:", getArea(rect));
console.log("Perimeter:", getPerimeter(rect));
changeWidth(rect, 2);
console.log("Width after change:", getWidth(rect));
changeHeight(rect, 3);
console.log("Height after change:", getHeight(rect));
changeWidthHeight(rect, -1, -1);
console.log("Width after changeWidthHeight:", getWidth(rect));
console.log("Height after changeWidthHeight:", getHeight(rect));
shiftX(rect, 1);
displayRectangleInfo(rect);
shiftY(rect, 1);
displayRectangleInfo(rect);
shiftXY(rect, -1, -1);
displayRectangleInfo(rect);
const point = {x: 3, y: 4};
console.log("Is point inside:", isPointInside(rect, point));
