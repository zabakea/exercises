"use strict"

const fullName = ("Peter Heronimous Lind");

const firstSpace = fullName.indexOf(" ");

const lastSpace = fullName.lastIndexOf(" ");


const first = (fullName.substring(0, firstSpace));
const middle = (fullName.substring(firstSpace, lastSpace).trim());
const last = (fullName.substring(lastSpace+1));

console.log(`My first name is ${first}, my middle name is ${middle} and my last name is ${last}`);


const fullName2 = ("Albus Percival Wulfric Brian Dumbledore");
const firstSpace2 = fullName2.indexOf(" ");

const lastSpace2 = fullName2.lastIndexOf(" ");

const first2 = (fullName2.substring(0, firstSpace2));
const middle2 = (fullName2.substring(firstSpace2, lastSpace2).trim());
const last2 = (fullName2.substring(lastSpace2+1));



console.log(`My first name is ${first2}, my middle name is ${middle2} and my last name is ${last2}`);
