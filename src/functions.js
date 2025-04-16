// question 1
function hello(name){
    return(`hello ${name}`);
}

// question 2
function sqfeetToAcre(sqfeet){
    return sqfeet / 43560;
}

// question 3
function lawnTime(width, length, rate){
    return width * length / rate;
}

// question 4
function airQuality (airQualityIndex) {
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


export {hello, sqfeetToAcre, lawnTime, airQuality}