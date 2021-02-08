"use strict"

const fullName = ("Peter Heronimous Lind");

const firstSpace = fullName.indexOf(" ");

const lastSpace = fullName.lastIndexOf(" ");


const first = (fullName.substring(0, firstSpace));
const middle = (fullName.substring(firstSpace, lastSpace).trim());
const last = (fullName.substring(lastSpace+1));

console.log(`My first name is ${first}, my middle name is ${middle} and my last name is ${last}`);


