import { hello, sqfeetToAcre, lawnTime, airQuality, yeeHa, slope } from './functions.js';

// components are functions that return html

function Question1() {
    return <section>
        <h2>1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
        </h2>
        <h3> test results</h3>
        <p>hello("Rich") == "{hello('Rich')}"</p>
        <p>hello("Bill") == "{hello('Bill')}"</p>
        <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2() {
    return <section>
        <h2>2. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
        </h2>
        <h3>test results</h3>
        <p>sqfeetToAcre(100000) == "{sqfeetToAcre(100000).toFixed(2)}" </p>
        <p>sqfeetToAcre(1234567) == "{sqfeetToAcre(1234567).toFixed(2)}" </p>
        <p>sqfeetToAcre(25000000) == "{sqfeetToAcre(25000000).toFixed(2)}" </p>

    </section>;
}

function Question3() {
    return <section>
        <h2>3. Given width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes.
        </h2>
        <h3>test results</h3>
        <p>lawnTime(100, 170, 10) == "{lawnTime(100, 170, 10).toFixed(2)}" </p>
        <p>lawnTime(50, 68, 15) == "{lawnTime(50, 68, 15).toFixed(2)}" </p>
        <p>lawnTime(1200, 1500, 100) == "{lawnTime(1200, 1500, 100).toFixed(2)}" </p>
    </section>;
}

function Question4() {
    return <section>
        <h2>4. Compute the air quality given an air quality index:

            - "Good" - 0 to 50 AQI
            - "Moderate" - 51 - 100 AQI
            - "Unhealthy for Sensitive Groups" - 101 - 150 AQI
            - "Unhealthy" - 151 - 200 AQI
            - "Very Unhealthy" - 201 - 300 AQI
            - "Hazardous" - 300+ AQI
        </h2>
        <h3>test results</h3>
        <p>airQuality(30) == "{airQuality(30)}" </p>
        <p>airQuality(74) == "{airQuality(74)}" </p>
        <p>airQuality(128) == "{airQuality(128)}" </p>
        <p>airQuality(182) == "{airQuality(182)}" </p>
        <p>airQuality(297) == "{airQuality(297)}" </p>
        <p>airQuality(325) == "{airQuality(325)}" </p>

    </section>;
}

function Question5() {
    return <section>
        <h2>5. yee_ha takes an integer parameter and returns one of the following strings:

            - "Yee" if number is evenly divisible by 3
            - "Ha" if number is evenly divisible by 7
            - "Yee Ha" if number is evenly divisible by both 3 and 7
            - "Nada" if number is none of the above
        </h2>
        <h3>test results</h3>
        <p>yeeHa(3) == "{yeeHa(3)}" </p>
        <p>yeeHa(14) == "{yeeHa(14)}" </p>
        <p>yeeHa(21) == "{yeeHa(21)}" </p>
        <p>yeeHa(100) == "{yeeHa(100)}" </p>

    </section>;
}

function Question6() {
    return <section>
        <h2>6. Calculate the slope of a line. Slope is calculated as rise / run, where rise is distance between y coordinates, and run is distance between x coordinates.</h2>
        <h3>test results</h3>
        <p>slope(x1= 10, y1= 20, x2= 30, y2= 50) == "{slope(10, 20, 30, 50).toFixed(2)}" </p>
        <p>slope(x1= 22, y1= 36, x2= 42, y2= 83) == "{slope(22, 36, 42, 83).toFixed(2)}" </p>
        <p>slope(x1= 2, y1= 6, x2= 4, y2= 10) == "{slope(2, 6, 4, 10).toFixed(2)}" </p>

    </section>;
}

export { Question1, Question2, Question3, Question4, Question5, Question6 }