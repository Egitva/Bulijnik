// Rectangle object constructor
function Rectangle(topLeft, bottomRight) {
    this.topLeft = topLeft;       // {x, y}
    this.bottomRight = bottomRight; // {x, y}
}

// 1. Display information about the rectangle
function displayRectangleInfo(rect) {
    console.log(`Top-left point: (${rect.topLeft.x}, ${rect.topLeft.y})`);
    console.log(`Bottom-right point: (${rect.bottomRight.x}, ${rect.bottomRight.y})`);
}

// 2. Get width of the rectangle
function getWidth(rect) {
    return rect.bottomRight.x - rect.topLeft.x;
}

// 3. Get height of the rectangle
function getHeight(rect) {
    return rect.bottomRight.y - rect.topLeft.y;
}

// 4. Get area of the rectangle
function getArea(rect) {
    return getWidth(rect) * getHeight(rect);
}

// 5. Get perimeter of the rectangle
function getPerimeter(rect) {
    return 2 * (getWidth(rect) + getHeight(rect));
}

// 6. Change width by a given amount
function changeWidth(rect, deltaWidth) {
    rect.bottomRight.x += deltaWidth;
}

// 7. Change height by a given amount
function changeHeight(rect, deltaHeight) {
    rect.bottomRight.y += deltaHeight;
}

// 8. Change width and height by given amounts
function changeWidthHeight(rect, deltaWidth, deltaHeight) {
    rect.bottomRight.x += deltaWidth;
    rect.bottomRight.y += deltaHeight;
}

// 9. Shift rectangle along X axis
function shiftX(rect, deltaX) {
    rect.topLeft.x += deltaX;
    rect.bottomRight.x += deltaX;
}

// 10. Shift rectangle along Y axis
function shiftY(rect, deltaY) {
    rect.topLeft.y += deltaY;
    rect.bottomRight.y += deltaY;
}

// 11. Shift rectangle along X and Y axes
function shiftXY(rect, deltaX, deltaY) {
    shiftX(rect, deltaX);
    shiftY(rect, deltaY);
}

// 12. Check if a point is inside the rectangle
function isPointInside(rect, point) {
    return point.x >= rect.topLeft.x &&
           point.x <= rect.bottomRight.x &&
           point.y >= rect.topLeft.y &&
           point.y <= rect.bottomRight.y;
}

// Example usage of all functions:

// Create a rectangle
const rect = new Rectangle({x: 1, y: 2}, {x: 6, y: 7});

// 1. Display information
displayRectangleInfo(rect);

// 2. Get width
console.log("Width:", getWidth(rect));

// 3. Get height
console.log("Height:", getHeight(rect));

// 4. Get area
console.log("Area:", getArea(rect));

// 5. Get perimeter
console.log("Perimeter:", getPerimeter(rect));

// 6. Change width by 2
changeWidth(rect, 2);
console.log("Width after change:", getWidth(rect));

// 7. Change height by 3
changeHeight(rect, 3);
console.log("Height after change:", getHeight(rect));

// 8. Change width by -1 and height by -1
changeWidthHeight(rect, -1, -1);
console.log("Width after changeWidthHeight:", getWidth(rect));
console.log("Height after changeWidthHeight:", getHeight(rect));

// 9. Shift rectangle along X by 1
shiftX(rect, 1);
displayRectangleInfo(rect);

// 10. Shift rectangle along Y by 1
shiftY(rect, 1);
displayRectangleInfo(rect);

// 11. Shift rectangle along X by -1 and Y by -1
shiftXY(rect, -1, -1);
displayRectangleInfo(rect);

// 12. Check if point is inside
const point = {x: 3, y: 4};
console.log("Is point inside:", isPointInside(rect, point));
