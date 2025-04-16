// question 1
function hello(name) {
    return (`hello ${name}`);
}

// question 2
function sqfeetToAcre(sqfeet) {
    return sqfeet / 43560;
}

// question 3
function lawnTime(width, length, rate) {
    return width * length / rate;
}

// question 4
function airQuality(airQualityIndex) {
    if (airQualityIndex >= 0 && airQualityIndex <= 50) {
        return "Good";
    }
    else if (airQualityIndex >= 51 && airQualityIndex <= 100) {
        return "Moderate"
    }
    else if (airQualityIndex >= 101 && airQualityIndex <= 150) {
        return "Unhealthy for Sensitive Groups"
    }
    else if (airQualityIndex >= 151 && airQualityIndex <= 200) {
        return "Unhealthy"
    }
    else if (airQualityIndex >= 201 && airQualityIndex <= 300) {
        return "Very Unhealthy"
    }
    else if (airQualityIndex > 300) {
        return "Hazardous"
    }
}

// question 5
function yeeHa(x) {
    if (x % 3 === 0 && x % 7 === 0) {
        return "Yee Ha";
    }
    else if (x % 7 === 0) {
        return "Ha";
    }
    else if (x % 3 === 0) {
        return "Yee";
    }
    else {
        return "Nada";
    }
}

// question 6
function slope(x1, y1, x2, y2) {
    let rise = y2 - y1;
    let run = x2 - x1;
    let slope = rise / run;
    return slope;
}

export { hello, sqfeetToAcre, lawnTime, airQuality, yeeHa, slope}