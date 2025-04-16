import {hello, sqfeetToAcre, lawnTime} from './functions.js';

// components are functions that return html

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2> test results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
<h2>test results</h2>
<p>sqfeetToAcre(100000) == "{sqfeetToAcre(100000).toFixed(2)}" </p>
<p>sqfeetToAcre(1234567) == "{sqfeetToAcre(1234567).toFixed(2)}" </p>
<p>sqfeetToAcre(25000000) == "{sqfeetToAcre(25000000).toFixed(2)}" </p>

    </section>
}

function Question3(){
    return <section>
3. Given width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes.
<h2>test results</h2>
<p>lawnTime(100, 170, 10) == "{lawnTime(100, 170, 10).toFixed(2)}" </p>
<p>lawnTime(50, 68, 15) == "{lawnTime(50, 68, 15).toFixed(2)}" </p>
<p>lawnTime(1200, 1500, 100) == "{lawnTime(1200, 1500, 100).toFixed(2)}" </p>
    </section>
}


export {Question1, Question2, Question3, Question4}