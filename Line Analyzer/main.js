// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('location-1').innerHTML = getPointLocation(pt1x, pt1y);
    document.getElementById('location-2').innerHTML = getPointLocation(pt2x, pt2y);
    document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
}

// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5
}

function getSlope(x1, y1, x2, y2) {
    let rise = y2 - y1;
    let run = x2 - x1;
    return rise/run;
}

function getDescription(x1, y1, x2, y2) {
    let slope = (y2 - y1) / (x2 - x1);
    if(slope == Infinity || slope == -Infinity) {
        return "Vertical";
    } else if(slope > 0) {
        return "Increasing";
    } else if(slope == 0) {
        return "Horizontal";
    } else if(slope < 0) {
        return "Decreasing";
    }
}

function getPointLocation(x, y) {
    if(x == 0 && y == 0) {
        return "Origin";
    } else if(x == 0) {
        return "X-axis";
    } else if(y == 0) {
        return "Y-axis";
    } else if(x > 0) {
        if(y > 0) {
            return "Quadrant 1";
        } else {
            return "Quadrant 4";
        }
    } else if(y > 0) {
        return "Quadrant 2";
    } else {
        return "Quadrant 3";
    }
}

function getEquation(x1, y1, x2, y2) {
    let slope = (y2 - y1) / (x2 - x1);
    let intercept = -(slope * x1 - y1);
    if(slope == Infinity || slope == -Infinity) {
        return "x = " + x1;
    } else if(slope == 0) {
        return "y = " + y1;
    } else {
        return "y = " + slope + "x + (" + intercept + ")"; 
    }
}

